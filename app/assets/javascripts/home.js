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
      nums = (windowHeight/18).toFixed();
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
    var $game_link = $("a.game_link")

    // Here's a function to show tom in the hero image div
    $("#tom").on("mouseenter", function(){
      tom();
    });
    
    function tom() {
      $hero_name.text("P1: Tom");
      $hero_class.text("Class: Apprentice");
      $hero_weapon.text("Weapon: Bow");
      $hero_armour.text("Armour: Git");
      $game_link.attr("href", "/games/dane")     
      $hero_img.css("background-image", "url(/assets/tom.png)");
    }
    $("#tom").on("mouseenter", function(){
      tom();
    });
    
    // Here's a function to show olly in the hero image div
   function olly(){
    $hero_name.text("P2: Olly");
    $hero_class.text("Class: Sorcerer");
    $hero_weapon.text("Weapon: Staff");
    $hero_armour.text("Armour: Robe");
    $game_link.attr("href", "/games/dutton")
    $hero_img.css("background-image", "url(assets/olly3.png)");
   }

   $("#olly").on("mouseenter", function(){
      olly();
    });
    
    // Here's a function to show erik in the hero image div
   function erik(){
    $hero_name.text("P3: Erik");
    $hero_class.text("Class: Warrior");
    $hero_weapon.text("Weapon: Axe");
    $hero_armour.text("Armour: Plate");
    $game_link.attr("href", "/games/froese")
    $hero_img.css("background-image", "url(assets/erik.png)");
   }

   $("#erik").on("mouseenter", function(){
      erik();
    });

    //this function randomises which character shows up on the homepage on load
    var randomiser = [1, 2, 3]
    var start_hero = randomiser[Math.floor(Math.random() * randomiser.length)];

    if (start_hero === 1){
      tom();
    } else if (start_hero === 2){
      olly();
    } else {
      erik();
    }
 }

});
