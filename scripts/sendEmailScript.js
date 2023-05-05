function sendEmail() {
    Email.send({
        SecureToken : "a1a49694-d0b4-4cdc-bebb-7baa82c25dbf",
        To : 'contact@sweetheartscare.com',
        From : "contact@sweetheartscare.com",
        Subject : `New Contact Form Inquiry From: (${document.getElementById("email").value})`,
        Body : `<h3>Name: ${document.getElementById("name").value} <br> Email: ${document.getElementById("email").value} <br> Message: <br> ${document.getElementById("message").value}</h3>`,
    }).then(
        message => alert(message)
    );
}