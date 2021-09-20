const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

let slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${100 * (slidesCount - 1)}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

upBtn.addEventListener('touchstart', () => {
  changeSlide('up');
});

upBtn.addEventListener('touchstart', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

document.addEventListener('wheel', (event) => {
  if (event.deltaY === -100) {
    changeSlide('up');
  } else {
    changeSlide('down');
  }
});

function changeSlide(direction) {
  switch (direction) {
    case 'up':
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
      break;

    case 'down':
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
      break;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
