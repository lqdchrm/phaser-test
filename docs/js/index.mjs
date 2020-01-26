import BackgroundScene from './backgroundScene.mjs';
import TitleScene from './titleScene.mjs'
import HudScene from './hudScene.mjs'
import PlayScene from './playScene.mjs'

var config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 400
    },
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    }
};

var game = new Phaser.Game(config);
game.scene.add('BackgroundScene', BackgroundScene, true);
game.scene.add('TitleScene', TitleScene, true);
game.scene.add('PlayScene', PlayScene, false);
game.scene.add('HudScene', HudScene, true);
