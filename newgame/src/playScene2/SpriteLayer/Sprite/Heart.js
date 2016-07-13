/**
 * Created by user on 2016/7/10.
 */

var Heart =cc.Sprite.extend({
    SpriteLayer:null,
    Tag:null,
   ctor:function(splayer,positionX,positionY,tag){
       this._super(res.heart_png);
       this.Tag=tag;
       this.x=positionX;
       this.y=positionY;
       this.SpriteLayer=splayer;
       this.SpriteLayer.addChild(this);
   } 
    
  
    
    
    
    
});






























