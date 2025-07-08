document.getElementById("currentYear").textContent = new Date().getFullYear();


(function () {
    emailjs.init({
        publicKey: "ptbnZvDuFGwqyW_me",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get values
    function validateForm() {
        const name = document.getElementById("InputName").value.trim();
        const email = document.getElementById("InputEmail").value.trim();
        // const phone = document.getElementById("InputPhone").value.trim();
        // const company = document.getElementById("InputCompany").value.trim();
        const message = document.getElementById("message").value.trim();

        // Get error divs
        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        // Clear previous errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        let isValid = true;

        if (!name) {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (!email) {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }
        }

        if (!message) {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        }

        return isValid;
    }

    //    form submission logic
    if (validateForm()) {
        emailjs.sendForm('service_9122zrm', 'template_srrh8fn', this)
            .then(
                function (response) {
                    // alert("Message sent successfully!");
                    Swal.fire({
                        title: "Message sent successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: 'fs-5 fw-bold text-uppercase px-5 border-0 text-dark'
                        }
                    });
                    document.getElementById('contact-form').reset();
                }, function (error) {
                    // alert("Failed to send message. Please try again.");
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send message. Please try again.",
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: 'fs-5 fw-bold text-uppercase px-5 border-0 text-dark'
                        }
                    });

                    console.error(error);
                });
    }
});
