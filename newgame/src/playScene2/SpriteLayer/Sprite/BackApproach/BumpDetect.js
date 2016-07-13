/**
 * Created by user on 2016/7/6.
 */

var bumpDetect= cc.Sprite.extend({
    MonsterGroups:[],
    magicBullsGroups:[],
    purpleBulletGroups:[],
    SpriteLayer:null,
    BackgroundLayer:null,

   ctor:function(splayer,bglayer){
       this._super();
      this.SpriteLayer=splayer;
      this.BackgroundLayer=bglayer;
      this.scheduleUpdate();
   } ,

    saveBullet:function (bullet) {
        this.magicBullsGroups.push(bullet);
    },

    savepurpleBullet:function (bullet) {
       
        this.purpleBulletGroups.push(bullet);
    },



    
    saveMonster:function (monster) {
       this.MonsterGroups.push(monster);
    },

    update:function (dt) {
           this.detect();
           this.detect1();
    },



    detect:function () {
       var magicBullet=this.magicBullsGroups;
       var MonsterGroups=this.MonsterGroups;
      
        for (var i=0;i<MonsterGroups.length;i++){
            for (var j=0;j<magicBullet.length;j++){
                if(MonsterGroups[0]!=null&&magicBullet[0]!=null){
                    var MonsterBox =MonsterGroups[i].getBoundingBox();
                    var bulletBox= magicBullet[j].getBoundingBox();

                    if(cc.rectIntersectsRect(MonsterBox,bulletBox)){
                     

                        MonsterGroups[i].dragonBlood=MonsterGroups[i].dragonBlood-5;
                        if( MonsterGroups[i].dragonBlood<=0){

                           this.SpriteLayer.removeChild(MonsterGroups[i],true);

                            var x = MonsterGroups[i].x;
                            var y =MonsterGroups[i].y;
                            MonsterGroups[i]=undefined;
                            MonsterGroups.splice(i,1);
                            this.increaseCoin();

                             i=i-1;

                            cc.audioEngine.playEffect(res.explosion_mp3);
                            this.exAnimation(x,y);
                          break;


                        }


                    }




                }

            }
        }

    },

    exAnimation:function (ox,oy) {
        var x=ox;
        var y=oy;

        cc.spriteFrameCache.addSpriteFrames(res.ee_plist,res.ee_png);
        this.explosionArray=[];
        for(var i=1;i<13;i++){
            var str="e_"+i+".png";
            var frame=cc.spriteFrameCache.getSpriteFrame(str);
            this.explosionArray.push(frame);
        }


        var fTime=1.0/15;
        var animation= cc.Animation.create(this.explosionArray,fTime);
        this.explosionAnimate=cc.animate(animation);
        this.explosionSprite =new cc.Sprite(this.explosionArray[0]);////////成功了
        var size =cc.winSize;
        this.explosionSprite.x=x;
        this.explosionSprite.y=y+80;

         
        this.SpriteLayer.addChild(this.explosionSprite);

        var callback=cc.callFunc(this.exAnimationCallback,this);
        var sequence=cc.sequence(this.explosionAnimate,callback);
        this.explosionSprite.runAction(sequence);



    },

    exAnimationCallback:function(){

        this.SpriteLayer.removeChild(this.explosionSprite,true);
    },









    increaseCoin:function () {
        var MoneyObject =this.BackgroundLayer.Money;
        var label = MoneyObject.monlabel;
        MoneyObject.money =MoneyObject.money+25;

        label.setString("x"+ MoneyObject.money);

    },



    detect1:function () {
        var magicBullet=this.purpleBulletGroups;
        var MonsterGroups=this.MonsterGroups;

        for (var i=0;i<MonsterGroups.length;i++){
            for (var j=0;j<magicBullet.length;j++){
                if(MonsterGroups[0]!=null&&magicBullet[0]!=null){
                    var MonsterBox =MonsterGroups[i].getBoundingBox();
                    var bulletBox= magicBullet[j].getBoundingBox();
                       
                    if(cc.rectIntersectsRect(MonsterBox,bulletBox)){
                          
                        MonsterGroups[i].dragonBlood=MonsterGroups[i].dragonBlood-5;
                        if( MonsterGroups[i].dragonBlood<=0){
                            
                            this.SpriteLayer.removeChild(MonsterGroups[i],true);
                            var x = MonsterGroups[i].x;
                            var y =MonsterGroups[i].y;
                            MonsterGroups[i]=undefined;
                            MonsterGroups.splice(i,1);

                            i=i-1;
                            cc.audioEngine.playEffect(res.explosion_mp3);
                            this.exAnimation(x,y);
                            this.increaseCoin();
                            break;


                        }


                    }
                    
                }

            }
        }

    },






    

    
    deleteMonster:function () {
        
    }
    
    
});
