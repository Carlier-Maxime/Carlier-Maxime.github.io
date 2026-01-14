const zoomableElements = document.querySelectorAll('.zoomable');
const lightbox = document.querySelector('#big-preview');
const container = lightbox.querySelector('.content-container');

function closeBigPreview() {
    const video = container.querySelector('video');

    if (video) {
        video.pause();
        video.muted = true;
        video.src = "";
        video.load();
    }

    container.replaceChildren();
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

lightbox.querySelector('.overlay').addEventListener('click', closeBigPreview);
lightbox.querySelector('.close-btn').addEventListener('click', closeBigPreview);

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeBigPreview();
});

function openBigPreview(el) {
    document.body.style.overflow = 'hidden';
    lightbox.classList.remove('hidden');
    const isVideo = el.tagName === 'VIDEO';
    const clone = document.createElement(el.tagName);
    clone.src = el.src;
    clone.classList.add('zoom')
    if (isVideo) {
        clone.controls = true;
        clone.autoplay = false;
        clone.loop = true;
        clone.muted = false;
        clone.playsinline = true;
        clone.play()
    } else {
        clone.alt = el.alt;
    }
    container.appendChild(clone);
}

function initLightbox() {
    zoomableElements.forEach(el => {
        el.addEventListener('click', () => {
            openBigPreview(el);
        });
    });
}

if (zoomableElements.length > 0) {
    initLightbox();
}