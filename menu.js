(function(){

var isOpen = false;

$("#menu-bottom").slideUp(0);

$("#menu-button").click(function() {
  if(isOpen) {
    isOpen = false;
    $("#menu-bottom").slideUp(500);
  }
  else {
    isOpen = true;
    $("#menu-bottom").slideDown(500);
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



})();

function open() {
  $("#menu-button").css("color", "black");
  $("#menu-button").css("background-color", "white");
}

function close() {
  $("#menu-button").css("color", "white");
  $("#menu-button").css("background-color", "transparent");
}
