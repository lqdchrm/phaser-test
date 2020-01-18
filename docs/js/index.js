class PlayScene extends Phaser.Scene {

    constructor(config) {
        super(config);

        this.bounce = null;
        this.ball = null;
        this.paddle = null;
    }

    preload() {
        this.load.setBaseURL('/phaser-test/');
        this.load.image('sky', '/img/bg.png');
        this.load.image('ball', '/img/ball.png');
        this.load.image('block', '/img/block.png');
        this.load.image('paddle', '/img/paddle.png');
        this.load.image('part', '/img/part.png');
        this.load.audio('bounce', '/snd/bounce.wav');
    }
    
    create() {
        // background
        this.add.image(200, 400, 'sky');

        // sound
        this.bounce = this.sound.add('bounce');

        // ball with particles
        var particles = this.add.particles('part');

        var emitter = particles.createEmitter({
            speed: 20,
            scale: { start: 0.7, end: 0 },
            tint: { start: 0xff945e, end: 0xff945e },
            blendMode: 'ADD'
        });

        this.ball = this.physics.add.image(200, 100, 'ball');

        this.ball.setVelocity(100, 200);
        this.ball.setBounce(1, 1);
        this.ball.setCollideWorldBounds(true);
        this.ball.body.onWorldBounds = true; // enabling listening for worldbound collision
        this.physics.world.on('worldbounds', this.collide.bind(this));

        emitter.startFollow(this.ball);

        // blocks

        // paddle
        this.paddle = this.physics.add.staticImage(200, 650, 'paddle');
        this.input.on('pointermove', this.movePaddle.bind(this));
     }

    update() {
        this.physics.world.collide(this.paddle, this.ball, this.collide.bind(this));
    }

    movePaddle(pointer) {
        this.paddle.x = pointer.x;
        this.paddle.refreshBody();
    }

    collide(a, b) {
        this.bounce.play();
        this.ball.body.velocity.x *= 1.005;
        this.ball.body.velocity.y *= 1.005;        
    }
}

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
    }
};

var game = new Phaser.Game(config);
game.scene.add('PlayScene', PlayScene, true);
