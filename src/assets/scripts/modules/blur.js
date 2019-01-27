// var blur = (function () {
//   var wrapper = document.querySelector('.js__blur__cont'),
//       form = document.querySelector('..js__blur__form');

//   return {
//     set: function () {
//       var imgWidth = document.querySelector('.js__blur').offsetWidth, 
//           posLeft = -wrapper.offsetLeft,
//           posTop = -wrapper.offsetTop,
//           blurCSS = form.style;
//       blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
//       blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

//     } 
//   }
// }());

// blur.set();

// window.onresize = function () {
//   blur.set();
// }

const container = document.querySelector('.js__blur');
const sectionEl = document.querySelector('.js__blur__cont');
const blurEl = document.createElement('.js__blur__form');

let drawBlur = function () {
  const width = sectionEl.offsetWidth;
  const height = sectionEl.offsetHeight;
  const left = container.offsetLeft;
  const bottom = height - (container.offsetTop + containeroffsetHeight);

  blurEl.style.width = width +"px";
  blurEl.style.height = height +"px";
  blurEl.style.left = `${left}px`;
  blurEl.style.bottom = `${bottom}px`;
}