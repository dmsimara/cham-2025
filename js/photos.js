document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const photos = document.querySelectorAll('.photo-item img');
  
    photos.forEach(photo => {
      photo.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.alt;
        lightbox.focus();
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
      lightboxImg.alt = '';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeBtn.click();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeBtn.click();
      }
    });
  });
  