export default class TitleScene extends Phaser.Scene {

    constructor(config) {
        super(config);
    }

    preload() {
        this.load.setBaseURL('/phaser-test/');
        this.load.image('sky', '/img/bg.png');
        this.load.image('playBtn', '/img/playbutton.png');
    }
    
    create() {
        // background
        this.add.image(200, 400, 'sky');

        // play btn
        var btn = this.add.image(200, 400, 'playBtn');
        btn.setInteractive();
        btn.once(
            'pointerup',
            /** @this {Phaser.Scene} */
            function () {
                this.scale.startFullscreen();
                this.scene.start('PlayScene');
            },
            this
        );

        // text
        this.add.text(150, 100, "Phaser-Test");
     }

    update() {
    }
}
