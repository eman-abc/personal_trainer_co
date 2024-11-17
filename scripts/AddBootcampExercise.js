
// Get references to the toggle button and the form for bootcamp
const toggleFormButton = document.getElementById("toggleFormButton");
const exerciseForm = document.getElementById("exerciseForm");

// Handle toggling the form visibility (existing code)
toggleFormButton.addEventListener("click", () => {
    if (exerciseForm.style.display === "none") {
        exerciseForm.style.display = "block";
        toggleFormButton.textContent = "Cancel";
    } else {
        exerciseForm.style.display = "none";
        toggleFormButton.textContent = "Add a New Service";
    }
});

// Handle form submission for bootcamp (existing code)
document.getElementById("exerciseForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const serviceName = document.getElementById("exerciseName").value;
    const serviceDescription = document.getElementById("exerciseDescription").value;
    const serviceImage = document.getElementById("exerciseImage").files[0];

    if (!serviceName || !serviceDescription || !serviceImage) {
        alert("Please provide all required fields.");
        return;
    }

    const bootcampContainer = document.querySelector(".bootcamp-container");

    const serviceBlock = document.createElement("div");
    serviceBlock.classList.add("bootcamp-variant");

    const img = document.createElement("img");
    img.src = URL.createObjectURL(serviceImage);
    img.alt = serviceName;
    img.classList.add("bootcamp-image");
    serviceBlock.appendChild(img);

    const nameElement = document.createElement("h3");
    nameElement.textContent = serviceName;
    serviceBlock.appendChild(nameElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = serviceDescription;
    serviceBlock.appendChild(descriptionElement);

    bootcampContainer.appendChild(serviceBlock);

    // Reset the form and hide it
    exerciseForm.reset();
    exerciseForm.style.display = "none";
    toggleFormButton.textContent = "Add a New Service";
});

// Handle removing the last service for bootcamp (existing code)
document.getElementById("removeExercise").addEventListener("click", () => {
    const bootcampContainer = document.querySelector(".bootcamp-container");
    if (bootcampContainer.lastChild) {
        bootcampContainer.removeChild(bootcampContainer.lastChild);
    }
});


