const image = document.getElementById('motion');
const frameCount = parseInt(image.dataset.frameCount, 10); // 8
let currentFrame = 1;

let isDragging = false;
let startX = 0;

function updateImage(frame) {
  image.src = `../motion/rg35xx_plus/image${frame}.jpg`;
}

function cycleImage() {
    currentFrame += 1;
    currentFrame = currentFrame % frameCount;
    console.log(currentFrame)
    updateImage(currentFrame + 1);
}