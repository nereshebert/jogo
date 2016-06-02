var menu = function(game){};

menu.prototype = {
     preload: function(){
       game.load.image('fundo','assets/imagens/fundoMenu.png');
       game.load.spritesheet('btJogar','assets/imagens/botaoJogar.png',205,50);

     },
     create: function(){
       game.add.sprite(0,0,'fundo');

       var btJogar = game.add.button(150, 200, 'btJogar', this.actionOnClick, this, 2, 1, 0);


     },
     update: function(){
     },


     actionOnClick: function() {

      game.state.start("Fases");


    }
}
