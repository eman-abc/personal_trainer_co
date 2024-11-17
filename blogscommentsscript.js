
    // Select the comment form and the comments list
    const commentForm = document.querySelector('.comment-form');
    const commentsList = document.querySelector('.comments-list');

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

        // Create a new comment element
        const newComment = document.createElement('li');
        newComment.innerHTML = `
            <h4>${name}</h4>
            <p>${comment}</p>
        `;

        // Append the new comment to the list
        commentsList.appendChild(newComment);

        // Clear the form inputs
        nameInput.value = '';
        commentInput.value = '';
    });

