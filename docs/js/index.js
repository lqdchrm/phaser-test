var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 400,
        height: 800
    },
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var paddle, ball, bounce;

function preload ()
{
    this.load.image('sky', '/img/bg.png');
    this.load.image('ball', '/img/ball.png');
    this.load.image('paddle', '/img/paddle.png');
    this.load.image('part', '/img/part.png');
    this.load.audio('bounce', '/snd/bounce.wav');
}

function create ()
{
    // background
    this.add.image(200, 400, 'sky');

    // sound
    bounce = this.sound.add('bounce');

    // ball with particles
    var particles = this.add.particles('part');

    var emitter = particles.createEmitter({
        speed: 20,
        scale: { start: 0.7, end: 0 },
        tint: { start: 0xff945e, end: 0xff945e },
        blendMode: 'ADD'
    });

    ball = this.physics.add.image(200, 100, 'ball');

    ball.setVelocity(100, 200);
    ball.setBounce(1, 1);
    ball.setCollideWorldBounds(true);
    ball.body.onWorldBounds = true; // enabling listening for worldbound collision
    this.physics.world.on('worldbounds', collide);

    emitter.startFollow(ball);

    // paddle
    paddle = this.physics.add.staticImage(200, 750, 'paddle');
    this.input.on('pointermove', function (pointer) {
        paddle.x = pointer.x;
        paddle.refreshBody();
    });
}

function update()
{
    this.physics.world.collide(paddle, ball, collide);
}

function collide(a, b) {
    bounce.play();
    ball.body.velocity.x *= 1.005;
    ball.body.velocity.y *= 1.005;
}