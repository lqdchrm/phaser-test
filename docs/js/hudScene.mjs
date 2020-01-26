export default class HudScene extends Phaser.Scene {

    constructor(config) {
        super(config);
        this.fsBtn = null;
    }

    preload() {
        this.load.setBaseURL('/phaser-test/');
        this.load.image('fullscreenBtn', '/img/fullscreen.png');
    }
    
    create() {
        // text
        this.add.text(32, 32, "Phaser-Test");

        // fullscreen btn
        this.fsBtn = this.add.image(770, 32, 'fullscreenBtn');
        this.fsBtn.setInteractive();
        this.fsBtn.on('pointerup', this.toggleFullscreen, this);
     }

    update() {
    }

    toggleFullscreen() {
        if (!this.scale.isFullscreen) {
            this.scale.startFullscreen();
        } else {
            this.scale.stopFullscreen();
        }
    }
}
