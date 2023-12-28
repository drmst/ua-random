window.addEventListener("load", function () {
  const carouselImgs = Array.from(document.getElementsByClassName("carousel-image"));
  const prevBtn = document.getElementsByClassName("prev")[0];
  const nextBtn = document.getElementsByClassName("next")[0];
  const indicators = Array.from(document.getElementsByClassName("indicator"));

  let currentIndex = 0;
  function showImage(index) {
    carouselImgs.forEach((img) => img.classList.remove("active-image"));
    indicators.forEach((indicator) =>indicator.classList.remove("active-indicator"));

    carouselImgs[index % carouselImgs.length].classList.add("active-image");
    indicators[index % indicators.length].classList.add("active-image");
  }

  function showPrevImg() {
    currentIndex--;
    showImage(currentIndex);
  }

  function showNextImg() {
    currentIndex++;
    showImage(currentIndex);
  }

  prevBtn.addEventListener("click", showPrevImg);
  nextBtn.addEventListener("click", showNextImg);
  this.setInterval(showNextImg, 3000);
});
