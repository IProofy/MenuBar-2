(function(){

var isOpen = false;

$("#menu-bottom").slideUp(0);

$("#menu-button").click(function() {
  if(isOpen) {
    isOpen = false;
    $("#menu-bottom").slideUp(400);
  }
  else {
    isOpen = true;
    $("#menu-bottom").slideDown(400);
  }

});

$("#menu-button").mouseenter(function(){
  open();
});

$("#menu-button").mouseleave(function(){
  if(!isOpen) {
    close();
  }
});

if($(document).width() <= 768){
  small();
}else {
  large();
}


window.addEventListener('resize', resize);

function resize() {
  if($(document).width() <= 768){
    small();
  }else {
    large();
  }
}


})();

function small() {
  $("#menu-bottom").css("height", "100%");
  $("#menu-bottom ul>li").css("display", "block");
  $("#menu-bottom ul>li").css("margin-top", "30px");
}

function large() {
  $("#menu-bottom").css("height", "64px");
  $("#menu-bottom ul>li").css("display", "inline");
  $("#menu-bottom ul>li").css("margin-top", "20px");
}

function open() {
  $("#menu-button").css("color", "black");
  $("#menu-button").css("background-color", "white");
}

function close() {
  $("#menu-button").css("color", "white");
  $("#menu-button").css("background-color", "transparent");
}
