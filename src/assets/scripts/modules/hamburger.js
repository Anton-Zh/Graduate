import $ from "jquery"

$().ready(function(){

  let activeDrop = "burger--open";

  let btn = $('.burger__menu');
  let change = $('.burger-btn__elem');
  let activeChange ="burger-btn__elem--active";
  let dropMenu = $('.burger__menu--active');

  btn.click(function(event){
    event.preventDefault();
    $( dropMenu ).slideToggle(500);


    if (btn.hasClass(activeDrop)){
      btn.removeClass(activeDrop);
      change.removeClass(activeChange);
    }else{
      btn.addClass(activeDrop);
      change.addClass(activeChange);
    }

  

  });
});