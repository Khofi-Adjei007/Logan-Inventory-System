document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const errorMessages = form.querySelectorAll('.error-message');

    // Function to check if any input field is empty
    function checkEmptyFields() {
        let isEmpty = false;
        form.querySelectorAll('input').forEach(function(input) {
            if (input.value.trim() === '') {
                isEmpty = true;
            }
        });
        return isEmpty;
    }

    // Function to display error messages
    function displayErrorMessages() {
        errorMessages.forEach(function(errorMessage) {
            errorMessage.classList.remove('hidden');
        });
    }

    // Function to hide error messages
    function hideErrorMessages() {
        errorMessages.forEach(function(errorMessage) {
            errorMessage.classList.add('hidden');
        });
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        if (checkEmptyFields()) {
            event.preventDefault(); // Prevent form submission
            displayErrorMessages();
        } else {
            hideErrorMessages();
        }
    });

    // Event listener for input field change
    form.querySelectorAll('input').forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.value.trim() !== '') {
                hideErrorMessages();
            }
        });
    });

    // Hide error messages on page load/refresh
    hideErrorMessages();
});
