const images = ["백수.jpg","살찐 백수.jpg", "오리지널 백수.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);