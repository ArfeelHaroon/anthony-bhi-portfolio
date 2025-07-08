document.getElementById("currentYear").textContent = new Date().getFullYear();


(function () {
    emailjs.init({
        publicKey: "ptbnZvDuFGwqyW_me",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_9122zrm', 'template_srrh8fn', this)
        .then(function (response) {
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
});
