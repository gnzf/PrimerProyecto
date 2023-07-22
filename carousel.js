const carousel = document.querySelectorAll(".carousel input");
let carouselPosition = 1;

function carouselNext() {
  carouselPosition = (carouselPosition + 1) % carousel.length;
  carousel[carouselPosition].checked = true;
}
function carouselPrev() {
  carouselPosition = (carouselPosition - 1 + carousel.length) % carousel.length;
  carousel[carouselPosition].checked = true;
}
const carouselContainer = document.querySelector(".carousel");
let carouselTouch = null;
carouselContainer.addEventListener("touchstart", function (e) {
  carouselTouch = e.touches[0].clientX;
});
carouselContainer.addEventListener("touchend", function (e) {
  let touchMove = e.changedTouches[0].clientX - carouselTouch;
  if (touchMove < -32) {
    carouselPrev();
  } else if (touchMove > 32) {
    carouselNext();
  }
});
carouselContainer.addEventListener("touchcancel", function (e) {
  carouselTouch = null;
});
