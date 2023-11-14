document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const message = document.getElementById("message");
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_pass").value;

        const passwordRegex = /^(?=.*[A-Z])(?=(?:[^0-9]*[0-9]){3})(?=.*[!@#$%^&*])\S*$/;
        const emailRegex = /@/;

        if (!passwordRegex.test(password)) {
            showMessage("Password does not meet the requirements.");
           // message.textContent = "Password does not meet the requirements.";
            return;
        }

        if (!emailRegex.test(email)) {
            showMessage("Invalid email address.");
            // message.textContent = "Invalid email address.";
            return;
        }

        if (password !== confirmPassword) {
            showMessage("Passwords do not match.");
            return;
        }
        showMessage("You have registered successfully!");
//        message.textContent = `You have registered successfully!`;
    });
    function showMessage(msg) {
        modalMessage.textContent = msg;
        modal.style.display = "block";
    }

    // Close the popup when the user clicks the close button (×)
    document.getElementsByClassName("close")[0].addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the popup when the user clicks anywhere outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});