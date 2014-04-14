$(document).ready(function() {
   if ($(".home_sprite").length > 0) {
    
    var windowHeight = $(window).height();
    var sprite = $(".home_sprite");
    var currentPos = parseInt(sprite.css("right"));
    // The following two functions turn the homepage sprites back and forth
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

// THE FOLLOWING PRINTS NUMBERS DOWN THE LEFT-HAND SIDE OF THE HOMEPAGE.
    function createNums(){
      nums = (windowHeight/15).toFixed();
      for (var i = 0; i < nums; i++){
        $("<li>").appendTo("#nums").html("<li>"+ i + "</li>");
      }
    }

    createNums();

    // HERO IMAGE FUNCTIONS BELOW----------------------------------
    var $hero_name = $("#home_p_name");
    var $hero_class = $("#home_p_class");
    var $hero_weapon = $("#home_p_weap");
    var $hero_armour = $("#home_p_armour");
    var $hero_img = $("#hero_shot");
    var $game_link = $("a")

    $("#tom").on("mouseenter", function(){
      $hero_name.text("P1: Tom");
      $hero_class.text("Class: Apprentice");
      $hero_weapon.text("Weapon: Bow");
      $hero_armour.text("Armour: Git");
      $game_link.attr("href", "/games/dane")     
      $hero_img.css("background-image", "url(/assets/tom.png)");
    });
    
   $("#olly").on("mouseenter", function(){
      $hero_name.text("P2: Olly");
      $hero_class.text("Class: Sorcerer");
      $hero_weapon.text("Weapon: Staff");
      $hero_armour.text("Armour: Robe");
      $game_link.attr("href", "/games/dutton")
      $hero_img.css("background-image", "url(assets/olly3.png)");
    });
    
   $("#erik").on("mouseenter", function(){
      $hero_name.text("P3: Erik");
      $hero_class.text("Class: Warrior");
      $hero_weapon.text("Weapon: Axe");
      $hero_armour.text("Armour: Plate");
      $game_link.attr("href", "/games/froese")
      $hero_img.css("background-image", "url(assets/erik.png)");
    });
    
 }

});
