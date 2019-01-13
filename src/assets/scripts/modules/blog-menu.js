import $ from "jquery"

$().ready(function(){

  let activeDrop = "sidebar__menu--active";

  let btn = $('.sidebar__menu');
  let change = $('.blog-aside');
  let activeChange ="blog-aside--active";
  let change1 = $('.sidebar');
  let activeChange1 ="sidebar--active";
  let dropMenu = $('.sidebar__menu--active');

  btn.click(function(event){
    event.preventDefault();
    $( dropMenu ).slideToggle(500);


    if (btn.hasClass(activeDrop)){
      btn.removeClass(activeDrop);
      change.removeClass(activeChange);
      change1.removeClass(activeChange1);
    }else{
      btn.addClass(activeDrop);
      change.addClass(activeChange);
      change1.addClass(activeChange1);
    }

  

  });
});