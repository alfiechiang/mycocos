/**
 * Created by user on 2016/7/8.
 */

var bullet=cc.Sprite.extend({
    damage:null,
    animate:null,
    bb:[],
    Monster1:null,
    SpriteLayer:null,
   
   ctor:function(purplehouse,monster1,splayer){
       this.SpriteLayer=splayer;
      this.Monster1=monster1;

    
       this.texturepacker();
       this._super(this.bb[0]);
       this.x=purplehouse.x;
       this.y=purplehouse.y;
       this.SpriteLayer.addChild(this);
       this.move();
   },
    
    chooseType:function(type){
        
        
        
    },
    
    texturepacker:function () {
        
        cc.spriteFrameCache.addSpriteFrames(res.ert_plist,res.ert_png);
        for (var i=1;i<6;i++){
            var str = "DarterEffectTeleport_" + i + ".png";
                var frame = cc.spriteFrameCache.getSpriteFrame(str);
                 this.bb.push(frame);

        }
        var fTime=1.0/15;
        var animation =cc.Animation.create(this.bb,fTime);
        this.animate=cc.animate(animation);


        
    },

    move:function(){

     
            var move = cc.moveTo(1, cc.p(this.Monster1.x, this.Monster1.y));
            var callback = cc.callFunc(this.deleteBullet, this);
            var sequence = cc.sequence(move, callback);
            this.runAction(sequence);
            // var callback=cc.callFunc(this.exAnimationCallback,this);
            //  this.runAction(cc.moveTo(1,cc.p(this.Monster1.x,this.Monster1.y)));
            this.runAction(this.animate);

       
    },
    
    
    
    

    deleteBullet:function () {

   
        this.SpriteLayer.removeChild(this,true);
        var bullet=this.SpriteLayer.BumpDect.magicBullsGroups
        bullet[0]=undefined;
        bullet.splice(0,1);
       
    }






});