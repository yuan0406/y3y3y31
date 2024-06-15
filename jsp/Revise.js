document.addEventListener("DOMContentLoaded", function() {
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const phoneCheckmark = document.getElementById("phone-checkmark");
    const emailCheckmark = document.getElementById("email-checkmark");

    phoneInput.addEventListener("input", function() {
        if (phoneInput.value.length === 10) {
            phoneCheckmark.style.display = "inline";
        } else {
            phoneCheckmark.style.display = "none";
        }
    });

    emailInput.addEventListener("input", function() {
        if (emailInput.value.endsWith("@gmail.com")) {
            emailCheckmark.style.display = "inline";
        } else {
            emailCheckmark.style.display = "none";
        }
    });
});
