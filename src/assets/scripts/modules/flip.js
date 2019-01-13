import $ from "jquery"

$().ready(function(){

  let activeDrop = "btn__auth--active";

  let btn = $('.btn__auth');
  let change = $('.flip-container');
  let activeChange ="flip-container--active";
  let dropMenu = $('.btn__auth--active');

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