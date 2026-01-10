const containers = document.querySelectorAll('.media-container');

containers.forEach(container => {
    const media = container.querySelector('video.main-media');
    const canvas = container.querySelector('.bg-blur');
    if (!media || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    canvas.width = 64;
    canvas.height = 64;

    function draw() {
        if (!media.paused && !media.ended) {
            ctx.drawImage(media, 0, 0, canvas.width, canvas.height);
        }
        requestAnimationFrame(draw);
    }

    media.addEventListener('play', draw);
    if (!video.paused) draw();
});