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
    "trainerImage",
    "images/Rollover images/RebaSmith-Rollover.jpg",
    "images/service images/yoga/RebaSmith.jpg"
  );


  addRolloverEffect(
    "volleyballImage",
    "images/service images/sports/volleyballHover.jpg",
    "images/service images/sports/volleyball.jpg"
  );

  addRolloverEffect(
    "blogImage1",
    "images/blogimage1hover.jpg",
    "images/blogimage1.jpeg"
  );


  addRolloverEffect(
    "blogImage2",
    "images/blogimage2hover.jpg",
    "images/blogimage2.jpg"
  );

  addRolloverEffect(
    "blogImage3",
    "images/blogimage3hover.jpg",
    "images/blogimage3.jpg"
  );

  addRolloverEffect(
    "blogImage4",
    "images/blogimage4hover.jpg",
    "images/blogimage4.jpg"
  );

  addRolloverEffect(
    "blogImage5",
    "images/blogimage5hover.jpg",
    "images/blogimage5.jpg"
  );

  addRolloverEffect(
    "blogImage6",
    "images/blogimage6hover.jpg",
    "images/blogimage6.webp"
  );

  addRolloverEffect(
    "bootcampServiceCard", // Match this ID
    "images/home/bootcamp-services-hover.jpg", // Ensure this image path is correct
    "images/home/bootcamp-services.jpeg" // Ensure this image path is correct
  );
  

  addRolloverEffect(
    "yogaServiceCard", // for yoga img hover
    "images/home/yoga_services-hover.jpg", // Ensure this image path is correct
    "images/home/yoga_services.jpg" // Ensure this image path is correct
  );


  addRolloverEffect(
    "SportsServiceCard", // for basketball img hover
    "images/home/Basketball-hover.jpg", // Ensure this image path is correct
    "images/home/Basketball.jpeg" // Ensure this image path is correct
  );


  addRolloverEffect(
    "logoID", // for basketball img hover
    "images/home/logo-hover.png", // Ensure this image path is correct
    "images/home/logo.png" // Ensure this image path is correct
  );

};