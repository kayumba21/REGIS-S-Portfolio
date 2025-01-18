document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.links');

  menuToggle.addEventListener('click', function() {
    links.classList.toggle('active');
  });

  function sendEmail() {
    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var country = document.getElementById("country").value.trim();
    var subject = document.getElementById("subject").value.trim();

    // Basic validation
    if (fname === '' || lname === '' || country === '' || subject === '') {
      alert("Please fill out all fields");
      return;
    }

    var body = "First Name: " + fname + "\n";
    body += "Last Name: " + lname + "\n";
    body += "Country: " + country + "\n";
    body += "Message: " + subject;
    var mailtoLink = "mailto:kayumbaregis03@gmail.com?subject=" + encodeURIComponent("Form Submission") + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
  }

  document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    sendEmail(); // Call the sendEmail function
  });
});
