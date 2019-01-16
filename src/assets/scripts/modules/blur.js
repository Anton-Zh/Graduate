var blur = (function () {
  var wrapper = document.querySelector('.blur__form-wrapper'),
    form = document.querySelector('.blur__form');

  return {
    set: function () {
      var imgWidth = document.querySelector('.blur__background').offsetWidth, 
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