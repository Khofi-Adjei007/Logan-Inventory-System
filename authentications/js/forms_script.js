
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registration-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var fields = form.querySelectorAll('input');
        var errorMessages = form.querySelectorAll('.error-message');
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].classList.add('hidden');
        }
        var hasError = false;
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value === '') {
                var errorMessage = fields[i].parentNode.querySelector('.error-message');
                errorMessage.classList.remove('hidden');
                hasError = true;
            }
        }
        if (!hasError) {
            form.submit();
        }
    });
});

