import $ from "jquery"

$(window).on('load', function () {
  $('#wrapper').css("opacity", "1"); // показываем блок с контентом 
  $('#preloader').delay(350).fadeOut('slow'); // и скрываем сам блок прелоудера.
});