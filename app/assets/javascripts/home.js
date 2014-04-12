$(document).ready(function() {
  // This function turns the homepage sprites back and forth
  // "viewer" is effectively a little window to the sprite. I couldn't call it window because it has a name conflict
    var sprite = $(".home_sprite");
    var currentPos = parseInt(sprite.css("right"));


  function turnCharacterRight (){
  
    console.log(currentPos)
    if (currentPos < 256){
      currentPos = currentPos + 32;
      sprite.animate({ right: currentPos});
      turnCharacterRight();
    }
  };   
 
  turnCharacterRight();
});
