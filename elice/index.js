const a = document.querySelectorAll("a");
const dog = document.querySelector("#dog");
const slides = dog.querySelector(".slides");
const slide = slides.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {
  let from = -(1024 * currentSlide);
  let to = from - 1024;
  slides.animate(
    {
      marginLeft: [from + "px", to + "px"],
    },
    {
      duration: 500,
      easing: "ease",
      iterations: 1,
      fill: "both",
    }
  );
  currentSlide++;
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
  }
}, 3000);

for (let i = 0; i < a.length; i++) {
  a[i].onclick = function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      behavior: "smooth",
      top: target.offsetTop,
    });
  };
}
