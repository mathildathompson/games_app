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
    var $hero_img = $("#hero_shot");
    var $game_link = $("a.game_link")

    // Here's a function to show tom in the hero image div
    $("#tom").on("mouseenter", function(){
      tom();
    });
    
    function tom() {
      $hero_name.text("P1: Tom");
      $game_link.attr("href", "/games/dane")
      $hero_img.css("background-image", "url(assets/tom.png)");
    }
    $("#tom").on("mouseenter", function(){
      tom();
    });
    
    // Here's a function to show olly in the hero image div
   function olly(){
    $hero_name.text("P2: Olly");
    $game_link.attr("href", "/games/dutton")
    $hero_img.css("background-image", "url(assets/olly3.png)");
   }

   $("#olly").on("mouseenter", function(){
      olly();
    });
    
    // Here's a function to show erik in the hero image div
   function erik(){
    $hero_name.text("P3: Erik");
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

// $('.character').on('mouseenter', function(){
//   var name = $(this).attr('id');
//   character(name); //Something alone these lines you will have to change the name of some of the images; 
// })

// function character(name){
//   $hero_name.text("P3: " + name);
//   $game_link.attr("href", "/games/" + name)
//   $hero_img.css("background-image", "url(assets/" + name +".png)");
// }

//What about refactoring this code into an object; 
