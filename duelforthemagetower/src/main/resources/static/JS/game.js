const viewport = 
{
    width: 1280,
    height: 720,
}

const user = {}

let gameplayResourcesLoaded = false;

const config =
{
    parent: "form",
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
            debug: false
        }
    },
    dom: 
    {
        createContainer: true
    },
    scene: [Loading, Menu, Login, User, GameplayScene, Pause, Gameover, Credits, Tutorial],
    username: "",
    password: ""
};

const game = new Phaser.Game(config);
