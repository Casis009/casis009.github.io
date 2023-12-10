





const images = ["img.jpg", "img5.jpg","img6.jpg"];

const chosenImage = images[Math.floor(Math.random() *images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("fullscreen-bg-image");
//이게 무엇인지


document.body.appendChild(bgImage);

console.log(bgImage);

