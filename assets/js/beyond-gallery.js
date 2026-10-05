(() => {
  const viewer = document.querySelector('.photo-viewer');
  const photos = Array.from(document.querySelectorAll('[data-gallery-photo]'));
  if (!viewer || !photos.length || typeof viewer.showModal !== 'function') return;

  const image = viewer.querySelector('.viewer-image');
  const caption = viewer.querySelector('.viewer-caption');
  const counter = viewer.querySelector('.viewer-counter');
  let current = 0;
  let trigger = null;

  const showPhoto = (index) => {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.href;
    image.alt = photo.dataset.caption;
    caption.textContent = photo.dataset.caption;
    counter.textContent = `${current + 1} / ${photos.length}`;
  };

  photos.forEach((photo, index) => {
    photo.addEventListener('click', (event) => {
      // Keep the browser's normal new-tab behavior for modified clicks.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = photo;
      showPhoto(index);
      viewer.showModal();
      document.body.classList.add('photo-viewer-open');
    });
  });

  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.querySelector('.viewer-prev').addEventListener('click', () => showPhoto(current - 1));
  viewer.querySelector('.viewer-next').addEventListener('click', () => showPhoto(current + 1));
  viewer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(current + 1); }
  });
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('photo-viewer-open');
    image.removeAttribute('src');
    trigger?.focus({preventScroll: true});
  });
})();
