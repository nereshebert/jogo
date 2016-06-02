var fase1 = function(game){};

  var bola;
  var bola2;
  var titulo;
  var sombra1;

  fase1.prototype = {

    colisaocompleta: function(spriteA, spriteB){

      var bordaA = spriteA.getBounds();
      var bordaB = spriteB.getBounds();

      return Phaser.Rectangle.containsRect(bordaA,bordaB);


   },

    preload: function(){

    //chamando as imagens

      game.load.image('ceu','assets/imagens/sky.png');
      game.load.spritesheet('bola', 'assets/imagens/bola.png',64,64);
      game.load.spritesheet('sombra1','assets/imagens/sombra1.png',132,128);
      game.load.audio('vencer','assets/imagens/Ayrton-Senna.mp3');
  },


    create: function(){

    //inserindo audio

      music = game.add.audio('vencer');

    //formatando imagens

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.add.sprite(0,0,"ceu");



      sombra1 = game.add.sprite(600,250, 'sombra1')


      bola = game.add.sprite(200,250, 'bola')
      bola.inputEnabled = true;
      bola.input.enableDrag(true);
      bola.animations.add('rodando', [0, 1,2,3,4,5,6], 10, true);
      bola.animations.add('parado', [0], 10, true);
      sombra1.animations.add('parado', [0], 10, true);

      console.log(bola.getBounds());

      console.log(sombra1.getBounds());



      sombra1.scale.setTo(0.6,0.6);

      titulo = game.add.text(game.world.rightX, game.world.rightY,"Arraste a bola para a sombra",{
          front: "65px Arial",
          fill: "#ff0044",
          align: "center",
        });
},

   update: function(){



     if (this.colisaocompleta(bola,sombra1))
    {
      bola.play('rodando');
      music.play();
      titulo.setText("PARABÉNS  VOCÊ CONSEGIU!!!!");
    }
    else
{
    bola.play('parado');
}


}




}
