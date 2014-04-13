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

  
  // HERO IMAGE FUNCTIONS BELOW----------------------------------
  var $hero_name = $("#home_p_name");
  var $hero_class = $("#home_p_class");
  var $hero_weapon = $("#home_p_weap");
  var $hero_armour = $("#home_p_armour");
  var $hero_img = $("#hero_shot");

  $("#tom").on("mouseenter", function(){
    $hero_name.text("P1: Tom");
    $hero_class.text("Class: Ranger");
    $hero_weapon.text("Weapon: Bow");
    $hero_armour.text("Armour: Leather");
    $hero_img.css("background-image", "url(http://tomvoldemortriddle.tripod.com/sitebuildercontent/sitebuilderpictures/chewie.jpg)");
  });
  
 $("#olly").on("mouseenter", function(){
    $hero_name.text("P2: Olly");
    $hero_class.text("Class: Sorcerer");
    $hero_weapon.text("Weapon: Staff");
    $hero_armour.text("Armour: Robe");
    $hero_img.css("background-image", "url(http://fc09.deviantart.net/fs70/i/2013/183/3/4/the_slime_monster_by_know_kname-d6bo6x6.png)");
  });
  
 $("#erik").on("mouseenter", function(){
    $hero_name.text("P3: Erik");
    $hero_class.text("Class: Warrior");
    $hero_weapon.text("Weapon: Axe");
    $hero_armour.text("Armour: Plate");
    $hero_img.css("background-image", "url(assets/erik.png)");
  });
  
 

});
