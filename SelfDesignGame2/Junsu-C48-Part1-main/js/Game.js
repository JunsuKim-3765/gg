class Game {
  constructor() {
   this.leftKeyActive = false;
   this.playerMoving = false;
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {

    form = new Form();
    form.display();

    player = new Player();
    playerCount = player.getCount();

    if(gameType==="SinglePlayer" && player.name===1){
      soldier=createSprite(500,500);
      soldier.addImage("soldier",soldierImg);
    }
    
    if(gameType==="SinglePlayer" && player.name===2){
      woodcutter=createSprite(500,500);
      woodcutter.addImage("woodcutter",woodcutterImg);
    }
  }

  play(){
    this.handleResetButton();
    form.hide();

    Player.getPlayersInfo();

    if(allPlayers != undefined){
      imageMode(CENTER);
      image(trackImage,width/2,height/2,width-10,height-20);
    }
    
    // if(allPlayers != undefined && `${this.cInput.input.value()===USA}`){
    //   imageMode(CENTER);
    //   image(usaImg,width/2,height/2,width-10,height-20);
    // }
  }

  handleResetButton() {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        carsAtEnd: 0
      });
      window.location.reload();
    });
  }

}

