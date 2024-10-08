document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("galleryContainer");

  const imageCount = 49;
  const pngCount = 3;
  const videoCount = 0;

  // Loop for images
  for (let i = imageCount; i >= 1; i--) {
    const img = createGalleryItem("image", `/gallery/jpg/${i}.jpg`);
    galleryContainer.appendChild(img);
  }

  // Loop for PNGs
  for (let i = pngCount; i >= 1; i--) {
    const img = createGalleryItem("image", `/gallery/png/${i}.png`);
    galleryContainer.appendChild(img);
  }

  // Loop for videos
  for (let i = videoCount; i >= 1; i--) {
    const video = createGalleryItem("video", `/gallery/mp4/${i}.mp4`);
    galleryContainer.appendChild(video);
  }
});

function createGalleryItem(type, url) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");

  if (type === "image") {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Leo Club Of Kathmandu Janmabhumi";
    galleryItem.appendChild(img);
  } else if (type === "video") {
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    galleryItem.appendChild(video);
  }

  return galleryItem;
}
