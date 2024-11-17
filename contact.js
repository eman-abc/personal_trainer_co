// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((message) => message.remove());

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate Name: Must not be empty
    if (name.trim() === "") {
        showError('name', 'Name is required');
        isValid = false;
    }

    // Validate Email: Call the validateEmail function
    const emailError = validateEmail(email);
    if (emailError !== 'Valid email address') {
        showError('email', emailError);
        isValid = false;
    }

    // Validate Phone: Must be in the format +64 followed by 9 digits
    const phonePattern = /^\+64\s?\d{2}\s?\d{3}\s?\d{4}$/; // Allows spaces
    if (!phonePattern.test(phone)) {
        showError('phone', 'Valid phone number must have 10 digits');
        isValid = false;
    }

    // Validate Message: Must not be empty
    if (message.trim() === "") {
        showError('message', 'Message is required');
        isValid = false;
    }

    // If the form is valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        document.querySelector('form').reset(); // Reset the form
    }
}

// Function to display error messages
function showError(inputId, errorMessage) {
    const inputElement = document.getElementById(inputId);
    const labelElement = inputElement.previousElementSibling; // Get the label element
    const existingError = labelElement.querySelector('.error-message');

    // Prevent duplicate error messages
    if (!existingError) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = errorMessage;

        // Append the error message next to the label element
        labelElement.appendChild(errorDiv);

        // Add red border to the input
        inputElement.style.border = '1px solid red';
    }
}

// Function to remove error messages and reset the border
function removeError(inputId) {
    const inputElement = document.getElementById(inputId);
    const labelElement = inputElement.previousElementSibling;
    const errorMessages = labelElement.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Reset the border
    inputElement.style.border = '';
}

function validateName(name) {
    // Trim the input
    name = name.trim();

    // Check for empty input
    if (!name) {
        return 'Name is required';
    }

    // Check length
    if (name.length < 2 || name.length > 50) {
        return 'Name must be between 2 and 50 characters';
    }

    // Check for valid characters
    const namePattern = /^[a-zA-Z\s'-]+$/;
    if (!namePattern.test(name)) {
        return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Check for consecutive spaces or special characters
    if (/\s{2,}/.test(name) || /-{2,}/.test(name)) {
        return 'Name cannot have consecutive spaces or special characters';
    }

    // Check for leading or trailing spaces
    if (name !== name.trim()) {
        return 'Name cannot start or end with a space';
    }

    // Check blacklist
    const forbiddenNames = ['test', 'null', 'admin', '123'];
    if (forbiddenNames.includes(name.toLowerCase())) {
        return 'Invalid name';
    }

    // If all checks pass
    return 'Valid name';
}

document.getElementById('name').addEventListener('blur', function () {
    const nameInput = document.getElementById('name');
    const nameError = validateName(nameInput.value);

    if (nameError !== 'Valid name') {
        showError('name', nameError);
    } else {
        removeError('name');
    }
});

document.getElementById('name').addEventListener('input', function () {
    const nameInput = document.getElementById('name');
    const nameError = validateName(nameInput.value);

    if (nameError === 'Valid name') {
        removeError('name');
    }
});


// Function to validate email
function validateEmail(email) {
    if (!email || email.trim() === '') {
        return 'Email is required';
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        return 'Invalid email format';
    }

    if (!email.endsWith('.com')) {
        return 'Invalid email format: Email must end with .com';
    }

    const [localPart, domainPart] = email.split('@');
    if (localPart.includes('..')) {
        return 'Local part cannot contain consecutive periods';
    }
    if (domainPart.includes('..')) {
        return 'Domain part cannot contain consecutive periods';
    }

    const specialChars = ['.', '-', '_', '+'];
    if (specialChars.includes(localPart.charAt(0)) || specialChars.includes(localPart.charAt(localPart.length - 1))) {
        return 'Local part cannot start or end with a special character';
    }

    return 'Valid email address';
}

// Function to handle automatic completion of email domain
function autoCompleteEmail(event) {
    const emailInput = event.target;
    const emailValue = emailInput.value;

    // Check if @ is typed and append "@gmail.com" if not already present
    if (emailValue.includes('@') && !emailValue.includes('@gmail.com')) {
        emailInput.value = emailValue.split('@')[0] + '@gmail.com';
    }
}

// Add blur event listener for validation
document.getElementById('email').addEventListener('blur', function () {
    const emailInput = document.getElementById('email');
    const emailError = validateEmail(emailInput.value);

    if (emailError !== 'Valid email address') {
        showError('email', emailError);
    } else {
        removeError('email');
    }
});

// Add input event listener for auto-completion
document.getElementById('email').addEventListener('input', autoCompleteEmail);

// Automatically add +64 to the phone number field on focus
document.getElementById('phone').addEventListener('focus', function () {
    const phoneInput = document.getElementById('phone');
    if (phoneInput.value === "") {
        phoneInput.value = "+64"; // Pre-fill with +64
    }
});

// Automatically format phone number with spaces as the user types
document.getElementById('phone').addEventListener('input', function (e) {
    let phoneInput = e.target;
    let value = phoneInput.value.replace(/\D/g, ''); // Remove non-numeric characters

    // Add +64 at the beginning
    if (!value.startsWith("64")) {
        value = "64" + value;
    }

    // Format the number as: +64 XX XXX XXXX
    if (value.length > 5) {
        value = "+64 " + value.substring(2, 4) + " " + value.substring(4, 7) + " " + value.substring(7, 11);
    } else if (value.length > 2) {
        value = "+64 " + value.substring(2);
    }

    phoneInput.value = value.trim(); // Update the value

    // Validate the formatted number
    const phonePattern = /^\+64\s?\d{2}\s?\d{3}\s?\d{4}$/;
    if (phonePattern.test(phoneInput.value)) {
        removeError('phone'); // Remove the error dynamically
    }
});

// Validate phone number on blur
document.getElementById('phone').addEventListener('blur', function () {
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\+64\s?\d{2}\s?\d{3}\s?\d{4}$/; // Updated pattern

    // Validate the phone number
    if (phonePattern.test(phoneInput.value)) {
        removeError('phone'); // Clear error if valid
    } else {
        showError('phone', 'Valid phone number must have 10 digits (e.g., +64 XX XXX XXXX)');
    }
});

function validateMessage(message) {
    // Trim the input
    message = message.trim();

    // Check for empty message
    if (!message) {
        return 'Message is required';
    }

    // Check length
    if (message.length < 4) {
        return 'Message must be at least 10 characters long';
    }
    if (message.length > 500) {
        return 'Message cannot exceed 500 characters';
    }

    // Check for excessive whitespace
    if (/\s{2,}/.test(message)) {
        return 'Message cannot contain excessive whitespace';
    }

    // Optional: Check for allowed characters
    const allowedPattern = /^[a-zA-Z0-9\s.,!?'"()-]+$/;
    if (!allowedPattern.test(message)) {
        return 'Message contains invalid characters';
    }

    // If all checks pass
    return 'Valid message';
}


document.getElementById('message').addEventListener('blur', function () {
    const messageInput = document.getElementById('message');
    const messageError = validateMessage(messageInput.value);

    if (messageError !== 'Valid message') {
        showError('message', messageError);
    } else {
        removeError('message');
    }
});

document.getElementById('message').addEventListener('input', function () {
    const messageInput = document.getElementById('message');
    const messageError = validateMessage(messageInput.value);

    if (messageError === 'Valid message') {
        removeError('message');
    }
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
        // Show success message
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block'; // Make the success message visible

        // Hide the success message after 5 seconds
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 3000); // 5000 milliseconds = 5 seconds

        // Reset the form
        document.getElementById('contact-form').reset();
    }
});

// Updated validateForm function
function validateForm() {
    let isValid = true;

    // Validate each field and display errors if any
    const nameInput = document.getElementById('name');
    const nameError = validateName(nameInput.value);
    if (nameError !== 'Valid name') {
        showError('name', nameError);
        isValid = false;
    } else {
        removeError('name');
    }

    const emailInput = document.getElementById('email');
    const emailError = validateEmail(emailInput.value);
    if (emailError !== 'Valid email address') {
        showError('email', emailError);
        isValid = false;
    } else {
        removeError('email');
    }

    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\+64\s?\d{2}\s?\d{3}\s?\d{4}$/;
    if (!phonePattern.test(phoneInput.value)) {
        showError('phone', 'Valid phone number must have 10 digits (e.g., +64 XX XXX XXXX)');
        isValid = false;
    } else {
        removeError('phone');
    }

    const messageInput = document.getElementById('message');
    const messageError = validateMessage(messageInput.value);
    if (messageError !== 'Valid message') {
        showError('message', messageError);
        isValid = false;
    } else {
        removeError('message');
    }

    return isValid;
}

// Utility functions for displaying and removing error messages
function showError(fieldId, message) {
    let errorElement = document.getElementById(fieldId + '-error');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = fieldId + '-error';
        errorElement.className = 'error-message';
        document.getElementById(fieldId).parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
    errorElement.style.color = 'red'; // Style the error message
}

function removeError(fieldId) {
    const errorElement = document.getElementById(fieldId + '-error');
    if (errorElement) {
        errorElement.remove();
    }
}