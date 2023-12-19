class Loading extends Phaser.Scene
{

    constructor()
    {
        super("LoadingScene");
    }

    timedEvent;

    preload()
    {
        this.load.image("loadingScreen", "../Assets/UI/Screens/Loading/LoadingLogo.png");


		this.load.on('complete', this.complete, this);
    }

    create()
    {
        this.add.image(0, 0, "loadingScreen").setOrigin(0, 0);
        setTimeout(() => {this.minTimeOver = true; this.complete()}, 0 /*1000 * 3*/)

    }

	complete() 
    {
        if(!this.minTimeOver) return;
        this.scene.start("MenuScene");
		console.log("Game Loaded!");
	}
}