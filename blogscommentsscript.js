// Select the comment form and the comments list
const commentForm = document.querySelector('.comment-form');
const commentsList = document.querySelector('.comments-list');

// Load comments from localStorage
function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => {
        addCommentToList(comment.name, comment.text);
    });
}

// Save comments to localStorage
function saveComments() {
    const comments = [];
    commentsList.querySelectorAll('li').forEach(commentElement => {
        const name = commentElement.querySelector('h4').textContent;
        const text = commentElement.querySelector('p').textContent;
        comments.push({ name, text });
    });
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Add a new comment to the list
function addCommentToList(name, comment) {
    const newComment = document.createElement('li');
    newComment.innerHTML = `
        <h4>${name}</h4>
        <p>${comment}</p>
        <button class="delete-comment btn">Delete Comment</button> <!-- Add the 'btn' class -->
    `;

    // Add delete functionality to the button
    newComment.querySelector('.delete-comment').addEventListener('click', function () {
        commentsList.removeChild(newComment); // Remove the comment
        saveComments(); // Update localStorage
    });

    commentsList.appendChild(newComment);
}

// Add an event listener for form submission
commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get the name and comment from the form inputs
    const nameInput = commentForm.querySelector('input[type="text"]');
    const commentInput = commentForm.querySelector('textarea');

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    // Validate that inputs are not empty
    if (name === '' || comment === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Add the new comment to the list and save to localStorage
    addCommentToList(name, comment);
    saveComments();

    // Clear the form inputs
    nameInput.value = '';
    commentInput.value = '';
});

// Load comments when the page loads
document.addEventListener('DOMContentLoaded', loadComments);
