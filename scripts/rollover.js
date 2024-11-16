/**
 * Function to add rollover effect to an image.
 * @param {string} imageId - The ID of the image element.
 * @param {string} hoverSrc - The image source when hovered.
 * @param {string} originalSrc - The original image source.
 */
function addRolloverEffect(imageId, hoverSrc, originalSrc) {
  const imgElement = document.getElementById(imageId);

  if (imgElement) {
    // Change image source on hover
    imgElement.addEventListener("mouseover", () => {
      imgElement.src = hoverSrc;
    });

    // Revert image source on mouse out
    imgElement.addEventListener("mouseout", () => {
      imgElement.src = originalSrc;
    });
  } else {
    console.error(`Element with id "${imageId}" not found.`);
  }
}

// Initialize rollover effects for sports training images
window.onload = function () {
  addRolloverEffect(
    "cyclingImage",
    "images/service images/sports/cyclingHover.jpg",
    "images/service images/sports/cycling.jpg"
  );
  addRolloverEffect(
    "runningImage",
    "images/service images/sports/runningHover.jpg",
    "images/service images/sports/running.jpg"
  );
  addRolloverEffect(
    "triathlonImage",
    "images/service images/sports/triathlonHover.jpg",
    "images/service images/sports/triathlon.jpg"
  );
  addRolloverEffect(
    "volleyballImage",
    "images/service images/sports/volleyballHover.jpg",
    "images/service images/sports/volleyball.jpg"
  );
};
