class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
    }

    preload() {
        this.load.image('play', '/assets/play.png');
    }

    create() {
        const play = this.add.image(400, 300, 'play');
        play.setInteractive();
        play.once('pointerup', () => this.scene.start('shooter'), this);
    }
}