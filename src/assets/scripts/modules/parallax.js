(function () {

  let parallax = (function () {
    let container = document.querySelector('.js-hero__container');
    let user = document.querySelector('.js-hero__avatar');
    let blocktitle = document.querySelector('.js-block__text');

    return {
      move(block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        let transformString = `translate3d(0, ${strafe}, 0)`;

        style.transform = transformString;
        style.webkitTransform = transformString;
      },

      init(wScroll) {
        this.move(container, wScroll, 200);
        this.move(user, wScroll, 8);
        this.move(blocktitle, wScroll, 1);
      }
    }
  })();

  window.onscroll = function () {
    let wScroll = window.pageYOffset;

    parallax.init(wScroll);
  };
})();