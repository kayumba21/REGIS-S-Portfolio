  // Add click event listener to each image
  projectImages.forEach(image => {
    image.addEventListener('click', () => {
      // Create a lightbox container
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';

      // Create an image element for the clicked image
      const lightboxImage = document.createElement('img');
      lightboxImage.src = image.src;

      // Add the image to the lightbox
      lightbox.appendChild(lightboxImage);

      // Add the lightbox to the body
      document.body.appendChild(lightbox);

      // Remove the lightbox when clicked outside of the image
      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });
</script>
<FontAwesomeIcon icon="fa-brands fa-x-twitter" />
