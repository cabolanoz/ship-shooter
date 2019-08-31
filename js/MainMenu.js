class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'mainmenu' });
    }

    preload() {
        this.load.image('play', '/assets/play.png');
    }

    create() {
        this.add.image(400, 300, 'play');
    }
}