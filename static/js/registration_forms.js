// registration_forms.js

document.addEventListener("DOMContentLoaded", function() {
    // Hide all error messages initially
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(errorMessage) {
        errorMessage.classList.add("hidden");
    });

    // Add event listener for form submission
    document.getElementById("registration-form").addEventListener("submit", function(event) {
        // Prevent form submission by default
        event.preventDefault();

        // Hide all error messages initially
        var errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(errorMessage) {
            errorMessage.classList.add("hidden");
        });

        var inputs = document.querySelectorAll("#registration-form input[type='text']");
        var emptyFields = [];

        // Check each input field
        inputs.forEach(function(input) {
            if (input.value.trim() === "") {
                var errorMessage = input.nextElementSibling;
                errorMessage.classList.remove("hidden");
                emptyFields.push(input.getAttribute("name"));
            }
        });

        // If there are no empty fields, submit the form
        if (emptyFields.length === 0) {
            this.submit();
        }
    });
});
