export default class TitleScene extends Phaser.Scene {

    constructor(config) {
        super(config);
        this.startBtn = null;
    }

    preload() {
        this.load.setBaseURL('/phaser-test/');
        this.load.image('playBtn', '/img/playbutton.png');
    }
    
    create() {
        // play btn
        this.startBtn = this.add.image(400, 200, 'playBtn');
        this.startBtn.setInteractive();
        this.startBtn.once('pointerup', this.startGame, this);
     }

    update() {
    }

    startGame() {
        this.scene.start('PlayScene');
    }
}
