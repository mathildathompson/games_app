$(document).ready(function() {
   if ($("#game_canvas").length > 0) {
        var game = new Phaser.Game(900, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

        function preload() {

            game.load.image('sky', '/assets/forestbg.png');           
            game.load.image('star', '/assets/star.png');
            game.load.spritesheet('powerup', '/assets/powerup.png', 80, 74);
            //adding background music
            this.load.audio('music', '/assets/adventure.mp3', true);
            //sprite audio
            game.load.audio('starCollect', '/assets/Powerup.ogg');
            game.load.audio('jumping', '/assets/jumping.wav');
            //here we load two more assets for the other 'stars'
            game.load.image('ground', '/assets/platform.png');
            game.load.image('diamond', '/assets/diamond.png');
            game.load.image('shinyball', '/assets/shinyball.png');
            game.load.image('wood_end1', '/assets/wood_end1.png');
            game.load.image('wood_end2', '/assets/wood_end2.png');
            game.load.image('tree_tile', '/assets/tree_tile.png');
            game.load.spritesheet('dude', '/assets/dude.png', 32, 48);
            game.load.spritesheet('baddie', '/assets/baddie.png', 32, 32);
            game.load.spritesheet('explosion', '/assets/explode.png', 128, 128);
        }

        var player;
        var platforms;
        var cursors;
        var powerup;
        var stars;
        //here we set two more vars
        var score = 0;
        var scoreText;

        function create() {
            game.world.setBounds(0, 0, 6400, 900);
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
        

            //  The platforms group contains the ground and the 2 ledges we can jump on
            platforms = game.add.group();

            //  We will enable physics for any object that is created in this group
            platforms.enableBody = true;

            // Here we create the ground.
            var ground = platforms.create(0, game.world.height - 64, 'ground');

            //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
            ground.scale.setTo(16, 2);

            //  This stops it from falling away when you jump on it
            ground.body.immovable = true;

            //Now let's create the ledges
            //the three below are on the right

            ledge = platforms.create(700, 200, 'wood_end1');
            ledge.body.immovable = true;

            ledge = platforms.create(450, 300, 'wood_end1');
            ledge.body.immovable = true;

            ledge = platforms.create(910, 587, 'tree_tile');
            ledge.body.immovable = true;


            //the two below are on the left
            //the first number says how many pixels from the left border it is
            //a negative number puts the ledge off the screen to the left
            //ledges have a fixed width, so to shorten them you have to put them off the screen
            //the second number says how far from the top of the page it is.           

            var ledge = platforms.create(0, 400, 'wood_end1');
            ledge.body.immovable = true;

            ledge = platforms.create(200, 250, 'wood_end1');
            ledge.body.immovable = true;

            ledge = platforms.create(0, 700, 'wood_end1');
            ledge.body.immovable = true;


            // GOING TO CREATE SOME WOODEND LEDGES DOWN HERE
            ledge = platforms.create(350, 600, 'wood_end1');
            ledge.body.immovable = true;
            ledge = platforms.create(300, 250, 'wood_end2');
            ledge.body.immovable = true;

            ledge = platforms.create(150, 500, 'wood_end2');
            ledge.body.immovable = true;

            // The player and its settings
            player = game.add.sprite(32, game.world.height - 150, 'dude');

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
                
            //ENEMIES BELOW

            enemies = game.add.group();
            enemies.enableBody = true;
            for (var i = 0; i < 3; i++)
            {
                var enemy = enemies.create( 100 + (i * 200), 100, 'baddie');
                enemy.body.gravity.y = 300;
                enemy.body.bounce.y = 0.1 + Math.random() * 0.2;
                enemies.callAll('animations.add', 'animations', 'left', [0, 1], 10, true);        
                enemies.callAll('animations.add', 'animations', 'right', [2, 3], 10, true);   

            }
            // These functions animate the enemies
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
                var star = stars.create( 100 + i * 500, 100, 'shinyball');
                star.id = 'career' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            for (var i = 0; i < 3; i++)
            {
                //  Create a star inside of the 'stars' group
                var star = stars.create(i * 200, 0, 'star');
                star.id = 'education' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            for (var i = 0; i < 1; i++)
            {
                //  Create a star inside of the 'stars' group
                var star = stars.create(300 + i * 250, 0, 'diamond');
                star.id = 'portfolio' + i

                //  Let gravity do its thing
                star.body.gravity.y = 300;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }

            //  The score
            scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

            //  Our controls.
            cursors = game.input.keyboard.createCursorKeys();
            
        }
     

        function update() {
            // enemies animations below
            
            // var tween = game.add.tween(enemies).to( { x: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
            // tween.onLoop.add(enemiesRight, this);
            

            // enemies.x += 1;
            
            
            //  Collide the player and the stars with the platforms
            game.physics.arcade.collide(player, platforms);
            game.physics.arcade.collide(stars, platforms);

            // ENEMY ADDED HERE====================
            game.physics.arcade.collide(enemies, platforms);

            //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
            game.physics.arcade.overlap(player, stars, collectStar, null, this);

            // KILL PLAYER IF HE BUMPS INTO BAD GUY
            game.physics.arcade.overlap(player, enemies, killPlayer, null, this);
            //  Reset the players velocity (movement)
            player.body.velocity.x = 0;

            if (cursors.left.isDown)
            {
                //  Move to the left
                player.body.velocity.x = -150;

                player.animations.play('left');
                
            }
            else if (cursors.right.isDown)
            {
                //  Move to the right
                player.body.velocity.x = 150;

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

            //  Add and update the score
            score += 10;
            scoreText.text = 'Score: ' + score;

            starCollect.play('');

        }

        function killPlayer (player, enemy) {
            console.log("booms");
            explosion = game.add.sprite(player.body.x - 32, player.body.y - 32,  'explosion');
            explosion.animations.add('run_explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
            explosion.animations.play('run_explode');
            setTimeout(explode, 1500);

            function explode() {
              explosion.kill();  
            }
            
            // Removes the player from the screen
            player.kill();


        }

    };
});
