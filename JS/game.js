const viewport = 
{
    width: 1280,
    height: 720,
}

let gameplayResourcesLoaded = false;

const config =
{
    type: Phaser.AUTO,
    mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
    width: viewport.width,
    height: viewport.height,
    physics:
    {
        default: 'arcade',
        arcade:
        {
            gravity: { y: 3200 },
            debug: true
        }
    },
    scene: [Menu, GameplayScene, Pause, Gameover]
};

const game = new Phaser.Game(config);
