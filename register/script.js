document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const message = document.getElementById("message");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const passwordRegex = /^(?=.*[A-Z])(?=(?:[^0-9]*[0-9]){3})(?=.*[!@#$%^&*])\S*$/;
        const emailRegex = /@/;

        if (!passwordRegex.test(password)) {
            message.textContent = "Password does not meet the requirements.";
            return;
        }

        if (!emailRegex.test(email)) {
            message.textContent = "Invalid email address.";
            return;
        }

        message.textContent = `You have registered successfully!`;
    });
});