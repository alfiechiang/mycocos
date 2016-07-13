/**
 * Created by user on 2016/6/19.
 */
var mapLayer = cc.Layer.extend({
    sprite:null,

    ctor:function (tag) {

        this._super();

        var Tag=tag;
        var size = cc.winSize;
        var background = new cc.Sprite(res.map);
        background.x=size.width/2;
        background.y=size.height/2;

        var houseMap= new cc.MenuItemImage(
            res.flag_png,
            res.flag_png,
            function () {

                cc.director.runScene(new cc.TransitionFade(1.2,new checkScene()));
            },
           this
        );

         var mu = new cc.Menu(houseMap);
        mu.x=size.width/2-100;
        mu.y=size.height/2-200;
        this.addChild(mu,1);
        this.addChild(background,0);



            var houseMap2= new cc.MenuItemImage(
                res.flag_png,
                res.flag_png,
                function () {

                    cc.director.runScene(new cc.TransitionFade(1.2,new playScene2()));
                },
                this
            );

            var mm = new cc.Menu(houseMap2);
            mm.x=size.width/2-20;
            mm.y=size.height/2-120;
            this.addChild(mm,1);
           

        

        return true;
    },

    onEnter:function () {
        this._super();
        cc.audioEngine.playMusic(res.Map_Theme_mp3,true);
    },

    onExitTransitionDidStart:function () {
        this._super();
        cc.audioEngine.stopMusic(res.Map_Theme_mp3);
    }



   


});

var mapScene = cc.Scene.extend({
    onEnter:function () {

        this._super();
        var layer = new mapLayer();
        this.addChild(layer);
    }
});

//onEnter