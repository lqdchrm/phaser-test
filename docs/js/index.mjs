import TitleScene from './titleScene.mjs'
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
            debug: true
        }
    }
};

var game = new Phaser.Game(config);
game.scene.add('TitleScene', TitleScene, true);
game.scene.add('PlayScene', PlayScene, false);
