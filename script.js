// carousel
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "cradle_point4.jpg",
        "MoCA_bridge.jpg",
        "pos.jpg",
        "pos2.jpg",
        "pos3.jpg",
        "switch.jpg",
        "switch2.jpg",
        "switch4.jpg",
        "switches.jpg",
        "switches2.jpg",
        "swtich3.jpg",
        "swtich5.jpg",
        "swtich6.jpg",
        "access_points.jpg",
        "cradle_point.jpg",
        "cradle_point_router.jpg",
        "cradle_point2.jpg",
        "cradle_point3.jpg",
    ];
    const carouselInner = document.getElementById("carouselInner");
    images.forEach((filename, index) => {
        const div = document.createElement("div");
        div.className = "carousel-item" + (index === 0 ? " active" : "");
        div.innerHTML = `
      <img src="pics/carousel/${filename}" class="d-block w-100 carousel-img" alt="Slide ${index + 1}">
    `;
        carouselInner.appendChild(div);
    });
    // carouselend
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
                                confirmButton: 'fs-5 fw-bold text-uppercase px-5 border-0 text-dark confirm_btn'
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
                                confirmButton: 'fs-5 fw-bold text-uppercase px-5 border-0 text-dark confirm_btn'
                            }
                        });
    
                        console.error(error);
                    });
        }
    });
});
