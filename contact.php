<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $country = $_POST['country'];
    $subject = $_POST['subject'];

    $to = "kayumbaregis03@gmail.com";
    $headers = "From: " . $firstname . " " . $lastname . " <" . $to . ">\r\n";
    $headers .= "Reply-To: " . $to . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_subject = "Form Submission from " . $firstname . " " . $lastname;
    $email_body = "First Name: " . $firstname . "\n";
    $email_body .= "Last Name: " . $lastname . "\n";
    $email_body .= "Country: " . $country . "\n";
    $email_body .= "Message: " . $subject . "\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Your message was sent successfully!";
    } else {
        echo "There was a problem sending your message.";
    }
}
?>
