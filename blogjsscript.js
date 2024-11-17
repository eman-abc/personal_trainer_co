// blogjsscript.js

// Select buttons
const changeStyleBtn = document.getElementById('changeStyleBtn');
const resetStyleBtn = document.getElementById('resetStyleBtn');

// Select all blog article titles or text (adjust selectors as needed)
const blogTitles = document.querySelectorAll('.blog-item .blog-card-title');
const blogDescriptions = document.querySelectorAll('.blog-item .blog-text span');

// Change style function
function changeTextStyle() {
    blogTitles.forEach(title => {
        title.style.fontWeight = 'bold';
        title.style.fontStyle = 'italic';
        title.style.color = '#DE3163';
    });

    blogDescriptions.forEach(description => {
        description.style.fontWeight = 'bold';
        description.style.fontStyle = 'italic';
        description.style.color = 'blue';
    });
}

// Reset style function
function resetTextStyle() {
    blogTitles.forEach(title => {
        title.style.fontWeight = 'normal';
        title.style.fontStyle = 'normal';
        title.style.color = ''; // Reset to default
    });

    blogDescriptions.forEach(description => {
        description.style.fontWeight = 'normal';
        description.style.fontStyle = 'normal';
        description.style.color = ''; // Reset to default
    });
}

// Attach event listeners
changeStyleBtn.addEventListener('click', changeTextStyle);
resetStyleBtn.addEventListener('click', resetTextStyle);


// Function to change the image on hover
function changeImage(imageElement, newSrc) {
    imageElement.src = newSrc; // Change to hover image
}

// Function to revert to the original image
function revertImage(imageElement, originalSrc) {
    imageElement.src = originalSrc; // Revert to original image
}
