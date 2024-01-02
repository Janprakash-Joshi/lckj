document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("galleryContainer");

    const imageCount = 21; // Assuming you have 2 images
    const pngCount = 3;   // Assuming you have 2 PNG files
    const videoCount = 0; // Assuming you have 2 video files

    // Loop for images
    for (let i = 1; i <= imageCount; i++) {
        const img = createGalleryItem('image', `/gallery/jpg/${i}.jpg`);    
        galleryContainer.appendChild(img);
    }

    // Loop for PNGs
    for (let i = 1; i <= pngCount; i++) {
        const img = createGalleryItem('image', `/gallery/png/${i}.png`);
        galleryContainer.appendChild(img);
    }

    // Loop for videos
    for (let i = 1; i <= videoCount; i++) {
        const video = createGalleryItem('video', `/gallery/mp4/${i}.mp4`);
        galleryContainer.appendChild(video);
    }
});

function createGalleryItem(type, url) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    if (type === "image") {
        const img = document.createElement("img");
        img.src = url;
        galleryItem.appendChild(img);
    } else if (type === "video") {
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        galleryItem.appendChild(video);
    }

    return galleryItem;
}
