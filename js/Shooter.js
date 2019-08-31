class Shooter extends Phaser.Scene {
    constructor() {
        super({ key: 'shooter' });
    }

    create() {
        this.add.text(250, 300, 'SHOOTER!', { color: 'white', fontSize: 48 })
    }
 }