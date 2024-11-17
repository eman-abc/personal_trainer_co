// task 1
// details section
function showDetails() {
    const detailsText = document.getElementById('details-text');
    const featureIcons = document.getElementById('feature-icons');
    const statistics = document.getElementById('statistics');
    detailsText.classList.remove('d-none');
    featureIcons.classList.remove('d-none');
    statistics.classList.remove('d-none');
}

function hideDetails() {
    const detailsText = document.getElementById('details-text');
    const featureIcons = document.getElementById('feature-icons');
    const statistics = document.getElementById('statistics');
    detailsText.classList.add('d-none');
    featureIcons.classList.add('d-none');
    statistics.classList.add('d-none');
}

// Switch Background Color Function
let isColor1 = true; // Flag to track the current color

function changeBackgroundColor() {
    const color1 = '#f8f9fa'; // First color
    const color2 = '#020e26'; // Second color

    // Switch between color1 and color2
    details.style.backgroundColor = isColor1 ? color1 : color2;

    // Toggle the flag
    isColor1 = !isColor1;
}

// Attach event listeners to buttons for showDetails, hideDetails, and changeBackgroundColor
document.getElementById('show-details').addEventListener('click', showDetails);
document.getElementById('hide-details').addEventListener('click', hideDetails);
document.getElementById('change-bg').addEventListener('click', changeBackgroundColor);


// Function to change the text style
function changeTextStyle() {
    // Select all paragraphs with the class 'service-description'
    const serviceDescriptions = document.querySelectorAll('.service-description');

    // Loop through each service description and change the font style and color
    serviceDescriptions.forEach(description => {
        description.style.fontWeight = 'bold';  // Make the text bold
        description.style.fontStyle = 'italic';  // Make the text italic
        description.style.color = 'red';  // Change the text color to red
    });
}

// Function to reset the text style
function resetTextStyle() {
    // Select all paragraphs with the class 'service-description'
    const serviceDescriptions = document.querySelectorAll('.service-description');

    // Loop through each service description and reset the styles to the original settings
    serviceDescriptions.forEach(description => {
        description.style.fontWeight = '';  // Reset to default font weight
        description.style.fontStyle = '';  // Reset to default font style
        description.style.color = '';  // Reset to default color
    });
}

// Function to validate the newsletter form
function validateNewsletterForm(event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Reset error messages
    resetErrorMessages();

    // Validate Email: Must be in correct format
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        document.getElementById("email-error").textContent = "Please enter a valid email address.";
        return false;
    }

    // If validation passes, show success message and submit form
    alert("Form submitted successfully!");
    // Optionally submit the form here if using AJAX
    // document.getElementById("newsletter-form").submit();
}

// Function to reset error messages
function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = "";
    });
}


// Function to change the image when the mouse hovers over it
function changeImage(imageElement, newImageSrc) {
    imageElement.src = newImageSrc; // Change the image source
    imageElement.style.opacity = 1; // Ensure opacity is set to 1 when hovering
}

// Function to reset the image to its original when the mouse moves away
function resetImage(imageElement, originalImageSrc) {
    imageElement.src = originalImageSrc; // Reset the image source
    imageElement.style.opacity = 1; // Ensure opacity is set to 1 after mouseout
}
