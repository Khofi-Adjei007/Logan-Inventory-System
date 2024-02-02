document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const errorMessageElements = document.querySelectorAll('.error-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputs = form.querySelectorAll('input');
        let isValid = true;

        errorMessageElements.forEach(function(errorMessage) {
            errorMessage.classList.add('hidden');
        });

        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                const errorMessage = input.parentNode.querySelector('.error-message');
                errorMessage.classList.remove('hidden');
                isValid = false;
            }
        });

        if (isValid) {
            // Form is valid, you can proceed with form submission
            form.submit();
        } else {
            // Form is not valid, you can show a message or take other action
            console.log('Form is not valid');
        }
    });
});
