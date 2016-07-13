/**
 * Created by user on 2016/6/19.
 */
var mainViewBackground = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();


        var size = cc.winSize;
        var background = new cc.Sprite(res.asd_png);
        background.x=size.width/2;
        background.y=size.height/2;
        var start= new okay(res.game_start);
       // start.x=size.width/2;
       // start.y=size.height/2;
      

        var startMenu= new cc.MenuItemImage(
            res.game_start,
            res.game_start,
            function () {
                cc.director.runScene(new cc.TransitionFade(1.2,new mapScene()));
            }
            ,this
        );
        var mu=new cc.Menu(startMenu);
        mu.x=size.width/2-255;
        mu.y=size.width/2-300;


        this.addChild(background,0);
        this.addChild(mu,1);




        return true;
    },
    onEnter:function () {
        this._super();
        cc.audioEngine.playMusic(res.Underground_Prep_mp3,true);
    },

    onExitTransitionDidStart:function () {
        this._super();
        cc.audioEngine.stopMusic(res.Underground_Prep_mp3);
    }

});

var mainViewBackgroundScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new mainViewBackground();
        this.addChild(layer);
    }
});


///new mainViewBackground()