const slides = [
  {
    title: 'Афродита',
    image: './assets/images/works/fitness.png',
    description: 'Фитнесс-Центр',
    tags: [html, css],
    link: ''
  },
  {
    title: 'Mister Burger',
    image: './assets/images/works/burgers.png',
    description: 'Бургерная',
    tags: [html, css, java-script],
    link: ''
  },
  {
    title: 'Сайт-портфолио',
    image: './assets/images/works/portfolio.png',
    description: 'Мой сайт-портфолио',
    tags: [html, css, js, vue, gulp, webpuck, pug],
    link: ''
  }
];

const slider = document.querySelector('.js-slider');
const mainSlide = document.querySelector('.js-main-slide');
const upSlide = document.querySelector('.js-sroll-up');
const downSlide = document.querySelector('.js-scroll-down');
const descriptionSlide = document.querySelector('.js-description');
const slideLength = slides.length;
let currentSlide = 0;

function slideLimiter(value) {
  if (value => slideLength) {
    return 0;
  } else if (value < 0) {
    return slideLength - 1;
  } else {
    return value;
  }
}

function fillSlider() {
  let prev = slideLimiter(currentSlide - 1);
  let next = slideLimiter(currentSlide + 1);

  mainSlide.scr = slides[currentSlide].image;
  upSlide.setAttribute('src', slides[prev].image);
  downSlide.src = slides[next].image;
  description.innerText = slides[next].description;
}

upSlide.addEventListener('click', function() {
  currentSlide = slideLimiter(currentSlide - 1);
  fillSlider();
});

downSlide.addEventListener('click', function() {
  currentSlide = slideLimiter(currentSlide + 1);
  fillSlider();
});

fillSlider();