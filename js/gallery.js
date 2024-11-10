// Adds an event listener to the content loaded in order to create the images dynamically
document.addEventListener("DOMContentLoaded", () => {

  // Create the an array with the images as an object
  const images = [
    { src: "flowers-pink", caption: "Pink Flowers" },
    { src: "flowers-purple", caption: "Purple Flowers" },
    { src: "flowers-red", caption: "Red Flowers" },
    { src: "flowers-white", caption: "White Flowers" },
    { src: "flowers-yellow", caption: "Yellow Flowers" }
  ];

  // Declares the figure image, caption and thumbnail by selecting the elements
  const figureImage = document.querySelector("figure img");
  const figCaption = document.querySelector("figcaption");
  const thumbnailList = document.querySelector("ul");

  // Populate thumbnail list dynamically
  images.forEach(image => {

    // Create a list element
    const listItem = document.createElement("li");

    // Create an image element to be used as the thumbnail
    const thumbImg = document.createElement("img");

    // Sett the image src
    thumbImg.src = `images/${image.src}-small.jpg`;

    // Set the alt text of the thumbnail
    thumbImg.alt = image.caption;

    // Set the width and height of the image
    thumbImg.width = 240;
    thumbImg.height = 160;

    // Add click event to each thumbnail
    thumbImg.addEventListener("click", () => {

      // Set the image source
      figureImage.src = `images/${image.src}-large.jpg`;

      // Set the image alt as the image caption
      figureImage.alt = image.caption;

      // Set the text context as the image caption
      figCaption.textContent = image.caption;

      // Update the thumbnail state
      updateThumbnailState(thumbImg);
    });

    // Append the thumbnail image to the list of items
    listItem.appendChild(thumbImg);

    // Append the thumbnail image to the list of thumbnails
    thumbnailList.appendChild(listItem);
  });

  // Function to grayscale inactive thumbnails
  function updateThumbnailState(activeThumb) {

    // Selects all images inside the ul list and if it's not the active one, set a grayscale
    document.querySelectorAll("ul img").forEach(img => {
      img.style.filter = img === activeThumb ? "none" : "grayscale(100%)";
    });
  }

  // Initialize first image as active
  updateThumbnailState(thumbnailList.querySelector("img"));
});