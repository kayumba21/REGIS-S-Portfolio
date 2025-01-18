document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.links');

  menuToggle.addEventListener('click', function() {
    links.classList.toggle('active');
  });
 });