var blur = (function () {
  var wrapper = document.querySelector('.js__blur__cont'),
      form = document.querySelector('..js__blur__form');

  return {
    set: function () {
      var imgWidth = document.querySelector('.js__blur').offsetWidth, 
          posLeft = -wrapper.offsetLeft,
          posTop = -wrapper.offsetTop,
          blurCSS = form.style;
      blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
      blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

    } 
  }
}());

blur.set();

window.onresize = function () {
  blur.set();
}