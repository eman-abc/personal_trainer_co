// blogjsscript.js
// Select buttons
const changeStyleBtn = document.getElementById('changeStyleBtn');
const resetStyleBtn = document.getElementById('resetStyleBtn');

// Select blog elements
const blogMeta = document.querySelectorAll('.blog-card-meta');
const blogTitles = document.querySelectorAll('.blog-card-title');

// Function to apply styling and animation
function changeTextStyle() {
    blogMeta.forEach(meta => meta.classList.add('styled-text'));
    blogTitles.forEach(title => title.classList.add('styled-text'));
}

// Function to reset styling
function resetTextStyle() {
    blogMeta.forEach(meta => meta.classList.remove('styled-text'));
    blogTitles.forEach(title => title.classList.remove('styled-text'));
}

// Attach event listeners to buttons
changeStyleBtn.addEventListener('click', changeTextStyle);
resetStyleBtn.addEventListener('click', resetTextStyle);

