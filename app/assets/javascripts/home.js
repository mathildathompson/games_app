$(document).ready(function() {
  // The following two functions turn the homepage sprites back and forth
  var sprite = $(".home_sprite");
  var currentPos = parseInt(sprite.css("right"));

  // This turns the sprite right -------------------------------
  function turnCharacterRight (){
    if (currentPos < 256){
      currentPos = currentPos + 32;
      sprite.css({
       right: currentPos
     });
      setTimeout(turnCharacterRight, 500);
    }else {
      turnCharacterLeft();
    }
  };   
  
  // This turns the sprite left -------------------------------------
  function turnCharacterLeft() {
    if (currentPos > 0){
      currentPos = currentPos - 32;
      sprite.css({
      right: currentPos
     });
      setTimeout(turnCharacterLeft, 500);
    }else {
      turnCharacterRight();
    }
  }

  turnCharacterRight();
// below are the functions related to hovering over the characters to show the hero images----------
  
  $(".character").on("mouseenter", function(){
    if ($(this).find("#tom").length) {
      console.log("I'm tom");
    } else if ($(this).find("#olly").length) {
      console.log("I'm olly");
    } else if ($(this).find("#erik").length) {
      console.log("I'm erik");
    }
  });

 

});
