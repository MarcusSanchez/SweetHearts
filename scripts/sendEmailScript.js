function sendEmail() {
    Email.send({
        SecureToken : "9d8e647a-ad51-4be8-a415-2c979818ba7e",
        To : 'contact@sweetheartscare.com',
        From : "contact@sweetheartscare.com",
        Subject : `New Contact Form Inquiry From: (${document.getElementById("email").value})`,
        Body : `<h3>Name: ${document.getElementById("name").value} <br> Email: ${document.getElementById("email").value} <br> Message: <br> ${document.getElementById("message").value}</h3>`,
    }).then(
        message => alert(message)
    );
}