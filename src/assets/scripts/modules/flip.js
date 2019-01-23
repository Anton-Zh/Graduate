import $ from "jquery"

$().ready(function(){

  let activeDrop = "btn__auth--active";

  let btn = $('.btn__auth');
  let change = $('.flip-container');
  let activeChange ="flip-container--active";
  let dropMenu = $('.btn__auth--active');

  let btnBack = $('.login__button--main');
  let btnBackActive = "login__button--main--active";


  btn.click(function(event){
    event.preventDefault();
    $( dropMenu ).slideToggle(500);

  
    if (btn.hasClass(activeDrop)){
      btn.removeClass(activeDrop);
      change.removeClass(activeChange);
      // btnBack.removeClass(btnBackActive);
    }else{
      btn.addClass(activeDrop);
      change.addClass(activeChange);
      btnBack.addClass(btnBackActive);
    }
  });
  btnBack.click(function(event){
    event.preventDefault();

    if (btnBack.hasClass(btnBackActive)){
      btnBack.removeClass(btnBackActive);
      btn.removeClass(activeDrop);
      change.removeClass(activeChange);
    }
  });
});