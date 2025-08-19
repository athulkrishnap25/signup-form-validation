document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
        } else {
            confirmPassword.setCustomValidity("");
        }
    }
    password.addEventListener("input", validatePasswordMatch);
    confirmPassword.addEventListener("input", validatePasswordMatch);

    form.addEventListener("submit", function (event) {
    validatePasswordMatch();

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); 
      alert("✅ Form submitted successfully!");
      form.reset();
      form.classList.remove("was-validated");
    }

    form.classList.add("was-validated");
  });
});
