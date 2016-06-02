var fases = function(game){};
var fases;
var fase1;
var fase2;
var fase3;
var fase4;
var cadeado;

fases.prototype = {
     preload: function(){
       game.load.image('fundo','assets/imagens/fundoFases.png');
       game.load.image('cadeado','assets/imagens/cadeado.png',720,960);
       game.load.spritesheet('btvoltar','assets/imagens/seta.png',146,149);
       game.load.spritesheet('bthome','assets/imagens/home.png',146,149);

     },
     create: function(){
       game.add.sprite(0,0,'fundo');
       fase1 = game.add.sprite(50,50,'cadeado');
       fase1.scale.setTo(0.1,0.1);
       fase1.inputEnabled = true;
       fase1.events.onInputDown.add(this.iniciaFase1, this);


       fase2 = game.add.sprite(150,50,'cadeado');
       fase2.scale.setTo(0.1,0.1);

       fase3 = game.add.sprite(250,50,'cadeado');
       fase3.scale.setTo(0.1,0.1);

       var btvoltar = game.add.button(320, 275, 'btvoltar', this.actionOnClick, this, 2, 1, 0);
       var bthome = game.add.button(330, 237, 'bthome', this.actionOnClick, this, 2, 1, 0);

     },

     iniciaFase1: function() {
       game.state.start("Fase1");
       console.log('clicado');

     },

      actionOnClick: function() {

      game.state.start("Menu");

      }


}
