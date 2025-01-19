document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.links');

  menuToggle.addEventListener('click', function() {
    links.classList.toggle('active');
  });

  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
    .then(response => response.text())
    .then(message => {
      alert(message);
      form.reset();
    })
    .catch(error => {
      alert("There was a problem sending your message.");
    });
  });
});
