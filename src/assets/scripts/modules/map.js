// import $ from "jquery"
ymaps.ready(init);
function init()
  {
    var map = new ymaps.Map("map", {

      center: [55.755022, 37.625592],
      zoom: 12,
      behaviors: ['drag', 'dblClickZoom']
  });        

}