/**
 * Created by user on 2016/7/5.
 */
var playScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();


        var spLayer= new SpriteLayer(this);
        var bgLayer= new backgroundLayer(spLayer);
        spLayer.saveBgLayer(bgLayer);
        this.addChild(bgLayer,0);
        this.addChild(spLayer,1);
    }
});