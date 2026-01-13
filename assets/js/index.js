window.addEventListener("load", () => {
    const containers = document.querySelectorAll('.media-container');

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                if (video.dataset.src) {
                    video.src = video.dataset.src;
                    video.load();
                    delete video.dataset.src;
                }

                if (video.pause) {
                    video.play().catch(e => {
                        console.warn("Autoplay blocked or video not ready");
                    });
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, { rootMargin: "0px 0px 200px 0px", threshold: 0.1 });

    containers.forEach(container => {
        const media = container.querySelector('video.main-media');
        const canvas = container.querySelector('.bg-blur');
        if (!media || !canvas) return;

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

        videoObserver.observe(media);
    });
});