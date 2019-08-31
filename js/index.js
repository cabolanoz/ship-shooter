const config = {
    backgroundColor: '#3498db'
,    height: 600,
    parent: 'container',
    scene: [MainMenu, Shooter],
    type: Phaser.AUTO,
    width: 800
};

new Phaser.Game(config);