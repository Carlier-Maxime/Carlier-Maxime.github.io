window.addEventListener("load", () => {
    const containers = document.querySelectorAll('.media-container');

    const mediaObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const media = entry.target;
            const ratio = entry.intersectionRatio;
            const isVideo = media.tagName === 'VIDEO';

            if (entry.isIntersecting) {
                if (isVideo && media.dataset.poster) {
                    media.poster = media.dataset.poster;
                    delete media.dataset.poster;
                }
                if (ratio < 0.2) return

                if (media.dataset.src) {
                    media.src = media.dataset.src;
                    if (isVideo) media.load();
                    else observer.unobserve(media);
                    delete media.dataset.src;
                }

                if (isVideo) {
                    media.play().catch(e => console.warn("Autoplay blocked"));
                }
            } else {
                if (isVideo && !media.paused) {
                    media.pause();
                }
            }
        });
    }, { rootMargin: "0px 0px 300px 0px", threshold: [0, 0.25] });

    containers.forEach(container => {
        const media = container.querySelector('video.main-media');
        const canvas = container.querySelector('.bg-blur');
        if (!media) {
            mediaObserver.observe(container.querySelector('img.main-media'))
            mediaObserver.observe(container.querySelector('img.bg-blur'));
            return;
        }
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        canvas.width = 64;
        canvas.height = 64;

        if (media.poster) {
            const posterImg = new Image();
            posterImg.src = media.poster;
            posterImg.onload = () => {
                if (media.paused) {
                    ctx.drawImage(posterImg, 0, 0, canvas.width, canvas.height);
                }
            };
        }

        function drawVideo() {
            if (!media.paused && !media.ended) {
                ctx.drawImage(media, 0, 0, canvas.width, canvas.height);
                requestAnimationFrame(drawVideo);
            }
        }

        media.addEventListener('play', () => {
            requestAnimationFrame(drawVideo);
        });

        mediaObserver.observe(media);
    });
});

const projectsContainer = document.getElementById('projects');
const projects = Array.from(document.querySelectorAll('.project'));

function buildMasonry() {
    const minColWidth = 400;
    const containerWidth = projectsContainer.offsetWidth;
    let nbCols = Math.max(1, Math.floor(containerWidth / minColWidth));
    if (nbCols === 1) {
        if (projectsContainer.classList.contains('masonry')) {
            projectsContainer.classList.remove('masonry');
            projectsContainer.innerHTML = '';
            projects.forEach((project, index) => {
                projectsContainer.appendChild(project);
                project.classList.remove('pj-in-cl')
            });
        }
        return;
    }

    projectsContainer.innerHTML = '';
    projectsContainer.classList.add('masonry');
    const cols = [];

    for(let i=0; i < nbCols; i++) {
        const col = document.createElement('div');
        col.className = 'project-column';
        projectsContainer.appendChild(col);
        cols.push(col);
    }

    projects.forEach((project, index) => {
        cols[index % nbCols].appendChild(project);
        project.classList.add('pj-in-cl')
    });
}

window.addEventListener('resize', buildMasonry);
window.onload = buildMasonry;