import PlayScene from './playScene.mjs'

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
