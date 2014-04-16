$(document).ready(function() {
   if ($("#game_canvas").length > 0) {
        var game = new Phaser.Game(900, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        function preload() {
        
            game.load.image('treetall', '/assets/tree2.png', 900, 1462);
          // here we run an if statement to choose which sprite to load
            if ($("#Erik").length > 0){
                game.load.spritesheet('dude', '/assets/eriksprite.png', 32, 60);
            } else if ($("#Tom").length > 0) {
                game.load.spritesheet('dude', '/assets/tomsprite.png', 32, 56);
            } else {
                game.load.spritesheet('dude', '/assets/ollysprite.png', 32, 60);
            }
        // Now we start to create the other assets
            game.load.image('sky', '/assets/forestbg.png');           
            
            game.load.image('star', '/assets/star.png');
            game.load.spritesheet('powerup', '/assets/powerup.png', 80, 74);
            //adding background music
            this.load.audio('music', '/assets/adventure.mp3', true);
            //sprite audio
            game.load.audio('starCollect', '/assets/Powerup.ogg');
            game.load.audio('jumping', '/assets/jumping.wav');
            game.load.audio('victory', '/assets/victory.mp3');
            //here we load two more assets for the other 'stars'
            game.load.image('ground', '/assets/platform.png');
            game.load.image('diamond', '/assets/diamond.png');
            game.load.image('shinyball', '/assets/shinyball.png');
            game.load.image('wood_end1', '/assets/wood_end1.png');
            game.load.image('wood_end2', '/assets/wood_end2.png');
            game.load.image('tree_tile', '/assets/tree_tile.png');
            
            game.load.image('shortledge', '/assets/shortledge.png');
            game.load.image('invplat', '/assets/inv_plat.png');
            game.load.image('longledge', '/assets/longledge.png');
            game.load.image('toadstool', '/assets/toadstool.png');
            game.load.image('grass', '/assets/grass_ground.png');
            // Button images
            game.load.image('reset-button', '/assets/reset-button.png');
            game.load.image('contact-button', '/assets/contact-button.png');
            game.load.image('house', '/assets/house.png');
            game.load.image('door', '/assets/door.png');

            game.load.image('trunk', '/assets/invisibletrunk.png');
            
            game.load.spritesheet('baddie', '/assets/baddie.png', 32, 32);
            game.load.spritesheet('explosion', '/assets/explode.png', 128, 128);
            game.load.spritesheet('butterfly', '/assets/butterfly2.png', 70, 65);
        }

        var trees;
        var player;
        var platforms;
        var cursors;
        var powerup;
        var stars;
        var button;
        var music;
        var jumping;
        var grass;
        var door;
        var butterflies;
        var enemies
        var ledge;

        //here we set two more vars
        var score = 0;
        var scoreText;

        function create() {
            game.world.setBounds(0, 0, 4800, 1200);
            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  A simple background for our game
            game.add.sprite(0, 0, 'sky');
            // sky.scale.setTo(3, 2);

            // Play background music
            music: Phaser.Sound;
            this.music = this.add.audio('music', 1, true);
            this.music.play();
            // Put audio fx into variables to be called on an action
            starCollect = game.add.audio('starCollect');
            jumping = game.add.audio('jumping');
            victory = game.add.audio('victory');

            //  The platforms group contains the ground and the 2 ledges we can jump on
            platforms = game.add.group();

            //  We will enable physics for any object that is created in this group
            platforms.enableBody = true;

            // Here we create the ground.
            var ground = platforms.create(0, game.world.height - 64, 'ground');

            //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
            ground.scale.setTo(12, 2);

            //  This stops it from falling away when you jump on it
            ground.body.immovable = true;

            // GRASS. Create 12 grass, each moving 400 to the right to form a continuous layer
            grasses = game.add.group();
            var x_pos = 0
            for (var i = 0; i < 12; i++)
            {
                grass = grasses.create(x_pos, game.world.height - 81, 'grass'); 
                x_pos = x_pos + 400 

            }

            //  Now let's create the ledges
            //the first number says how many pixels from the left border it is
            //a negative number puts the ledge off the screen to the left
            //ledges have a fixed width, so to shorten them you have to put them off the screen
            //the second number says how far from the top of the page it is.    

            //Now let's create the ledges
            //the three below are on the right


            ledge = platforms.create(0, 950, 'toadstool');
            ledge.body.immovable = true;

            //this is the first ledge right of the toadstool
            ledge = platforms.create(350, 800, 'wood_end1');
            ledge.body.immovable = true;
                
            //this is the second ledge above the toadstool
            ledge = platforms.create(550, 650, 'wood_end1');
            ledge.body.immovable = true;     

            //now the player is on the other side of the tree
            ledge = platforms.create(1900, 730, 'tree_tile');
            ledge.body.immovable = true;

            ledge = platforms.create(1500, 970, 'longledge');
            ledge.body.immovable = true;

            ledge = platforms.create(1800, 970, 'longledge');
            ledge.body.immovable = true;

            ledge = platforms.create(2100, 970, 'longledge');
            ledge.body.immovable = true;

            //now the player is through the bridge.
            trees = game.add.group();
            tree = trees.create(3100, 480 , 'treetall');
            
            ledge = platforms.create(3300, 600 , 'trunk');
            ledge.body.immovable = true;

            ledge = platforms.create(3140, 580 , 'invplat');
            ledge.body.immovable = true;


            //these ledges run up the second big tree
            ledge = platforms.create(2700, 950, 'wood_end1');
            ledge.body.immovable = true;

            ledge = platforms.create(3000, 800, 'wood_end1');
            ledge.body.immovable = true;
            
            ledge = platforms.create(2700, 650, 'wood_end1');
            ledge.body.immovable = true;


            ledge = platforms.create(3000, 480, 'wood_end1');
            ledge.body.immovable = true;

             // this is the short wood easter egg ledge

            ledge = platforms.create(2300, 650, 'shortledge');
            ledge.body.immovable = true;

            ledge = platforms.create(2050, 500, 'shortledge');
            ledge.body.immovable = true;  

            ledge = platforms.create(1750, 450, 'shortledge');
            ledge.body.immovable = true;

            ledge = platforms.create(1450, 500, 'shortledge');
            ledge.body.immovable = true; 

       // Here are some tree/trunk/top pairings. Trees have no 'body', trunks and tops are invislbe, but do.
            
            var tree = trees.create(800, 480 , 'treetall');
            
            ledge = platforms.create(1000, 600 , 'trunk');
            ledge.body.immovable = true;

            ledge = platforms.create(840, 580 , 'invplat');
            ledge.body.immovable = true;

            // HOUSE
            var house = game.add.sprite(4000, game.world.height - 336, "house");
            door = game.add.sprite(4170, game.world.height - 139, "door");   
            game.physics.arcade.enable(door);
            door.body.immovable = true;


            // The player and its settings
            player = game.add.sprite(200, game.world.height - 150, 'dude');

            //  We need to enable physics on the player
            game.physics.arcade.enable(player);

            //  Player physics properties. Give the little guy a slight bounce.
            player.body.bounce.y = 0.2;
            player.body.gravity.y = 300;
            player.body.collideWorldBounds = true;

            //  Our two animations, walking left and right.
            player.animations.add('left', [0, 1, 2, 3], 10, true);
            player.animations.add('right', [5, 6, 7, 8], 10, true);
            game.camera.follow(player);
                
            // Butterfly
            // The object below contains the butterfly coordinates
            var butterfly_coords = {
                107: 100,
                106: 200,
                105: 300,
                104: 400,
                103: 500,
                102: 600,
                101: 700
            }
            butterflies = game.add.group();
            for (var key in butterfly_coords) {
                var butterfly = butterflies.create( key, butterfly_coords[key], 'butterfly');
            }
            butterflies.callAll('animations.add', 'animations', 'fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true)
            butterflies.callAll('animations.play', 'animations', 'fly');

            //CREATE ENEMIES BELOW

            enemies = game.add.group();
            enemies.enableBody = true;
            for (var i = 0; i < 3; i++)
            {
                var enemy = enemies.create( 100 + (i * 200), 100, 'baddie');
                enemy.body.gravity.y = 300;
                enemy.body.bounce.y = 0.1 + Math.random() * 0.2;
            }
            
            // These functions animate the enemies
            enemies.callAll('animations.add', 'animations', 'left', [0, 1], 10, true);        
            enemies.callAll('animations.add', 'animations', 'right', [2, 3], 10, true);   
            enemiesRight();
        
            function enemiesRight(){
                var tween = game.add.tween(enemies).to( { x: 200 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

                // enemies.x += 100;
                enemies.callAll('animations.play', 'animations', 'left');
                setTimeout(enemiesLeft, 2000);
            }
           
            function enemiesLeft(){
                var tween = game.add.tween(enemies).to( { x: 400 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
                // enemies.x += -100;
                enemies.callAll('animations.play', 'animations', 'right');
                setTimeout(enemiesRight, 2000);
            }
            //  Finally some stars to collect
            stars = game.add.group();
            //diamonds

            //  We will enable physics for any star that is created in this group
            stars.enableBody = true;

            //  Here we'll create 8 of them evenly spaced apart
            for (var i = 0; i < 3; i++)
            {
                //  Create a star inside of the 'stars' group
                var star = stars.create( 2100 + i * 600, 0, 'shinyball');
                star.id = 'career' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            for (var i = 0; i < 2; i++)
            {
                //  Create a star inside of the 'stars' group
                var star = stars.create(600 + i * 700, 0, 'star');
                star.id = 'education' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            for (var i = 0; i < 2; i++)
            {
                //  Create a star inside of the 'stars' group
                var star = stars.create(470 + i * 1200, 0, 'diamond');
                star.id = 'portfolio' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.2;
            }

            //  The score
            scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

            //  Our controls.
            cursors = game.input.keyboard.createCursorKeys();
            
        }
     

        function update() {
            
            //  Collide the player and the stars with the platforms
            game.physics.arcade.collide(player, platforms);
            game.physics.arcade.collide(stars, platforms);

            // ENEMY ADDED HERE====================
            game.physics.arcade.collide(enemies, platforms);
            
            // This lets the user win if they run into the door.
            game.physics.arcade.overlap(player, door, winChecker, null, this);

            //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
            game.physics.arcade.overlap(player, stars, collectStar, null, this);

            // KILL PLAYER IF HE BUMPS INTO BAD GUY
            game.physics.arcade.overlap(player, enemies, killPlayer, null, this);
            //  Reset the players velocity (movement)
            player.body.velocity.x = 0;

            if (cursors.left.isDown)
            {
                //  Move to the left
                player.body.velocity.x = -200;

                player.animations.play('left');
                
            }
            else if (cursors.right.isDown)
            {
                //  Move to the right
                player.body.velocity.x = 200;

                player.animations.play('right');

            }
            else
            {
                //  Stand still
                player.animations.stop();

                player.frame = 4;
            }
            
            //  Allow the player to jump if they are touching the ground.
            if (cursors.up.isDown && player.body.touching.down)
            {
                player.body.velocity.y = -350;
                jumping.play('');
            }
        }
        function collectStar (player, star) {
            
            // Removes the star from the screen
            star.kill();

            //this line fades in resume content when a star is collected
            $('#'+star.id).children('li').hide().css('visibility','visible').fadeIn(2000);
            //slides the accordian up or down to show resume content as stars are collected
            var $section = $('#'+star.id).closest('ul');
            if (! $section.is(':visible')) {
                $section.prev('h3').trigger('click');
            }  
            
            //highlight sidebar tabs when something is selected
            function highlight() {
                $section.prev('h3').css('background', 'linear-gradient(#226758, #32957B)').fadeOut(1000, function() {
                    $section.prev('h3').css('background', 'linear-gradient(#272822, #3B3A32)').fadeIn(400);
                });
            }

            powerup = game.add.sprite(player.body.x -32, player.body.y, 'powerup');
            powerup.animations.add('collect', [0, 1, 2, 3, 4, 5], 50, true);
            powerup.animations.play('collect');
            setTimeout(powerup_collect, 300);

            function powerup_collect() {
              powerup.kill();  
            }
            

            highlight();
            
            // updates the score so we can check in teh winChecker function if player has collected all the stars.
            score += 1;
             

            // This simply plays a sound effect each time an item is collected.
            starCollect.play('');

        }

         // Here we check if the user has collected all the collectables when they enter the door
         function winChecker () {
            if (score > 6) { 
                win();
                this.music.pause();
                player.kill();
            } 
            // THIS SHIT AIN'T WORKING YET!!!!!!!!!!!!!!!
            // Basically the text just writes over itself, rather than deleting the previous text.
            // else {
            //     wincheck_style = { font: "65px Arial", fill: "#fff", align: "center" };
            //     game.add.text(470, game.world.height - 400, "You have collected " + score + " butterflies.", wincheck_style);
            //     game.add.text(470, game.world.height - 320, "You have " + (7 - score) + " more to catch.", wincheck_style);
            // }
         }

        // Win function: f the right score is reached then pause music, remove player from screen and call win function 
        function win () {                
            style = { font: "65px Arial", fill: "#fff", align: "center" };
            game.add.text(game.camera.x+325, game.camera.y+150, "You Win!", style);
            button = game.add.button(game.camera.x+275, game.camera.y+250, 'reset-button', actionOnResetClick, this);
            button = game.add.button(game.camera.x+475, game.camera.y+250, 'contact-button', actionOnContactClick, this);  
            // The following lines kill the players movement before disabling keyboard inputs
            player.body.velocity.x = 0;
            setTimeout(game.input.keyboard.disabled = true, 1000); 
            // Plays the victory song    
            victory.play('');
            // When the Reset button is clicked, it calls this function, which in turn calls the game to be reloaded.
            // Here we display the contact and replay button options, calling either respective function
            function actionOnResetClick () {
                gameRestart();
            }

            // When the contact button is clicked it redirects through to contact form
            function actionOnContactClick () {
                
            } 
        } 

        function killPlayer (player, enemy) {
            explosion = game.add.sprite(player.body.x - 32, player.body.y - 32,  'explosion');
            explosion.animations.add('run_explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
            explosion.animations.play('run_explode');
            
            setTimeout(explode, 1500);
            setTimeout(gameOverText, 1500);
            setTimeout(gameRestart, 3000);

            function explode() {
              explosion.kill();  
            }

            // Show text to say you died, then reload the game.
            function gameOverText () {
                style = { font: "65px Arial", fill: "#fff", align: "center" };
                var text = game.add.text(game.camera.x+450, game.camera.y+250, "You Lose! Try Again...", style);
                text.anchor.set(0.5);
            }
            // Removes the player from the screen
            player.kill();     
        }

        // This function gets called when restarting the game via the reset button after winning, or when you die and start over.
        function gameRestart () {
            location.reload();
        }    
    };
});
