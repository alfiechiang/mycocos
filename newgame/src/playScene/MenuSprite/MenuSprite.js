/**
 * Created by user on 2016/7/2.
 */


var loseMenu= cc.Sprite.extend({
    checkLayer:null,


    ctor:function (layer) {

        this._super(res.board_png);
        var size =cc.winSize;
        this.checkLayer=layer;
        this.x=size.width/2;
        this.y=size.height/2;
        this.checkLayer.addChild(this,5);
        this.restartButton();this.quitButton();this.map();

    },

    restartButton:function () {
        // var restartButton= new cc.Sprite(res.restart_png);
        // var size=cc.winSize;
        // restartButton.x=365;
        // restartButton.y=193;
        // this.checkLayer.addChild(restartButton,6);

        var restartButton= new cc.MenuItemImage(
            res.restart_png,
            res.restart_png,
            function () {

                cc.director.runScene(new cc.TransitionFade(1.2,new checkScene()));
            },
            this.checkLayer
        );

        var mu= new cc.Menu(restartButton);
       mu.x=365;
       mu.y=193;
        this.checkLayer.addChild(mu,6);
        // var startMenu= new cc.MenuItemImage(
        //     res.game_start,
        //     res.game_start,
        //     function () {
        //         cc.director.runScene(new cc.TransitionFade(1.2,new mapScene()));
        //     }
        //     ,this
        // );
        // var mu = new cc.Menu(houseMap);
        // mu.x=size.width/2-100;
        // mu.y=size.height/2-200;
        // this.addChild(mu,1);



    },

    quitButton:function () {
        var quitButton= new cc.MenuItemImage(
            res.QUIT_png,
            res.QUIT_png,
            function () {
                cc.director.runScene(new cc.TransitionFade(1.2,new mapScene()));
            },
            this.checkLayer
        );

        var mu =new cc.Menu(quitButton);
        mu.x=595;
        mu.y=193;
        this.checkLayer.addChild(mu,6);
     //   quitButton.x=595;
      //  quitButton.y=193;
       // this.checkLayer.addChild(quitButton,6);
    },

    map:function(){
      var map= new cc.Sprite(res.KillMonster);
        map.x=476;
        map.y=355;
        this.checkLayer.addChild(map,6);
    }





});