export default class BackgroundScene extends Phaser.Scene {

    constructor(config) {
        super(config);
        this.stripes = null;
        this.t = null;
    }

    preload() {
        this.load.setBaseURL('/phaser-test/');
        this.load.image('sky', '/img/bg.png');
        this.load.image('stripes', '/img/stripes.png');
    }
    
    create() {
        // background
        var bg = this.add.image(400, 200, 'sky');
        bg.setDisplaySize(800, 400);

        // tiling image
        this.stripes = this.add.tileSprite(400, 200, 800, 400, 'stripes');
     }

    update() {
        this.stripes.tilePositionX = Math.cos(this.t) * 40;
        this.stripes.tilePositionY = Math.sin(this.t) * 40;

        this.t += 0.01;        
    }
}
