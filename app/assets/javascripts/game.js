$(document).ready(function() {
   if ($("#game_canvas").length > 0) {
// <!-- canvas js -->    
   

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    function preload() {

    game.load.image('stars', 'assets/starfield.png');
    game.load.spritesheet('ship', 'assets/humstar.png', 32, 32);
    game.load.image('asteroid', 'assets/asteroid.png');
    game.load.image('invader', 'assets/invader.png', 32, 32);
    game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);

    }

    var ship;
    var starfield;
    var cursors;
    var aliens;

    var explosions;

    function create() {

    game.world.setBounds(0, 0, 1600, 1200);

    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.p2.defaultRestitution = 0.9;

    starfield = game.add.tileSprite(0, 0, 800, 600, 'stars');
    starfield.fixedToCamera = true;

    asteroids = game.add.group();
    asteroids.enableBody = true;
    asteroids.physicsBodyType = Phaser.Physics.P2JS;

    for (var i = 0; i < 30; i++)
    {
    var asteroid = asteroids.create(game.world.randomX, game.world.randomY, 'asteroid');
    asteroid.body.setCircle(16);
    }

    ship = game.add.sprite(900, 600, 'ship');
    ship.scale.set(2);
    ship.smoothed = false;
    ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
    ship.play('fly');

    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
    game.physics.p2.enable(ship, false);
    ship.body.setCircle(28);

    game.camera.follow(ship);

    //  An explosion pool
    explosions = game.add.group();
    explosions.createMultiple(30, 'kaboom');
    explosions.forEach(setupInvader, this);

    //  The Aliens
    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    createAliens();

    cursors = game.input.keyboard.createCursorKeys();

    }

    function createAliens () {

    for (var y = 0; y < 100; y++)
    {
    for (var x = 0; x < 7; x++)
    {
    var alien = aliens.create(x * 200, y * 200, 'invader');
    alien.anchor.setTo(0.9, 0.9);
    // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alien.play('fly');
    alien.body.moves = false;
    }
    }

    aliens.x = 200;
    aliens.y = -19000;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = game.add.tween(aliens).to( { x: 200 }, 50, Phaser.Easing.Linear.None, true, 0, 5000, true);

    //  When the tween loops it calls descend
    tween.onLoop.add(descend, this);
    }

    function descend() {

    aliens.y += 1;
    }

    function setupInvader (invader) {

    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add('kaboom');

    }


    function update() {

    ship.body.setZeroVelocity();

    if (cursors.left.isDown)
    {
    ship.body.moveLeft(200);
    }
    else if (cursors.right.isDown)
    {
    ship.body.moveRight(200);
    }

    if (cursors.up.isDown)
    {
    ship.body.moveUp(200);
    }
    else if (cursors.down.isDown)
    {
    ship.body.moveDown(200);
    }

    if (!game.camera.atLimit.x)
    {
    starfield.tilePosition.x += (ship.body.velocity.x * 16) * game.time.physicsElapsed;
    }

    if (!game.camera.atLimit.y)
    {
    starfield.tilePosition.y += (ship.body.velocity.y * 16) * game.time.physicsElapsed;
    }

    //  Run collision
    // game.physics.arcade.overlap(ship, aliens, collisionHandler, null, this);


    }

    function render() {

    }

    // function collisionHandler (ship, alien) {

    //     //  When a ship hits an alien we kill them both
    //     ship.kill();
    //     alien.kill();

    //     //  And create an explosion :)
    //     var explosion = explosions.getFirstExists(false);
    //     explosion.reset(alien.body.x, alien.body.y);
    //     explosion.play('kaboom', 30, false, true);

    // }
    }
});
