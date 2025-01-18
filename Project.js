document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.links');

  menuToggle.addEventListener('click', function() {
    links.classList.toggle('active');
  });

  // Get all project images
  const projectImages = document.querySelectorAll('.project-image');

  // Add click event listener to each image
  projectImages.forEach(image => {
    image.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior

      // Get the parent card element
      const card = image.closest('.card');

      // Get the description and technologies
      const description = card.getAttribute('data-description');
      const technologies = card.getAttribute('data-tech');

      // Create a lightbox container
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox active';

      // Create an image element for the clicked image
      const lightboxImage = document.createElement('img');
      lightboxImage.src = image.src;

      // Create a description element
      const lightboxDescription = document.createElement('div');
      lightboxDescription.className = 'lightbox-description';
      lightboxDescription.innerHTML = `<strong>Description:</strong> ${description}<br><strong>Technologies:</strong> ${technologies}`;

      // Add the image and description to the lightbox
      lightbox.appendChild(lightboxImage);
      lightbox.appendChild(lightboxDescription);

      // Add the lightbox to the body
      document.body.appendChild(lightbox);

      // Remove the lightbox when clicked outside of the image
      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });
});
