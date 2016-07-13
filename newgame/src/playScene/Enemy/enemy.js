/**
 * Created by user on 2016/6/26.
 */
var enemy1 =cc.Sprite.extend({
    blood:10,

   ctor : function (picture) {
         this._super(picture);
        
   }



});


var enemy2 =cc.Sprite.extend({
    blood:7,
    monsterGroups:null,
    checkLayer:null,
    arrayPathX:null,
    arrayPathY:null,
    animate:null,
    magicBulletGroups:null,
    tag:null,
    ctor : function (layer,MonsterTag) {
        this.checkLayer=layer;

         var enemy= this.texturePackerAndAnimate();
        this._super(enemy);
        this.tag=MonsterTag;
        
        this.magicBulletGroups=[];

        this.x=4;
        this.y=136;

        this.checkLayer.addChild(this,6);


       this.setPath();this.monsterAction();  this.schedule(this.removeMonster,0.5,1000*10000000,0.1);
        this.schedule(this.judge,0.1,1000000*1000000,0.1);
      //  this.removeMonster();        thi
         // this.schedule(this.collide,0.5,100*100000,0.1);
    },

    texturePackerAndAnimate:function () {
        cc.spriteFrameCache.addSpriteFrames(res.Monster2_plist,res.Monster2_png);
        var array=[];
        for(var i=1;i<7;i++){
            var str="Canibal_"+i+".png";
            var frame=cc.spriteFrameCache.getSpriteFrame(str);
            array.push(frame);
        }

        var fTime=1.0/15;
        var animation=cc.Animation.create(array,fTime);
        var animate=cc.animate(animation);
          this.animate=animate;
        return array[0];


    },

    setPath:function(){
      
         var x=[]; var y=[];
         x[0]= 4; x[1]=78 ; x[2]=136 ; x[3]=186 ; x[4]=229 ; x[5]=277 ; x[6]=327 ; x[7]=390 ; x[8]=438 ; x[9]=481 ; x[10]=500 ; x[11]=505 ; x[12]=561 ; x[13]=644 ; x[14]=715 ; x[15]= 750; x[16]= 760; x[17]= 765; x[18]= 772; x[19]=662 ;
        x[20]=613 ; x[21]=624 ; x[22]=651 ; x[23]=694 ; x[24]=735 ; x[25]=780 ; x[26]=830 ; x[27]=893 ; x[28]=1200;

        y[0]= 136;  y[1]=132 ;  y[2]=172 ;  y[3]=222 ;  y[4]=261 ;  y[5]=266 ;  y[6]=271 ;  y[7]=268 ;  y[8]=269 ;  y[9]=281 ;  y[10]= 332;  y[11]= 392;  y[12]= 403;  y[13]= 407;  y[14]= 405;  y[15]=371 ;  y[16]=321 ;
        y[17]=277 ;  y[18]=240 ;  y[19]=221 ;  y[20]=189 ;  y[21]=142 ;  y[22]=111 ;  y[23]=107 ;  y[24]=107 ;  y[25]=107 ;  y[26]=110 ;  y[27]=111 ;  y[28]=109 ;

       this.arrayPathX=x;
        this.arrayPathY=y;
    },

    monsterAction:function(){

          var movement=[];
        for(var i=1;i<29;i++){
            movement[i]=cc.moveTo(0.5,cc.p(this.arrayPathX[i],this.arrayPathY[i]));
        }

       var sequence=cc.sequence(
          movement[1], movement[2], movement[3], movement[4], movement[5], movement[6], movement[7], movement[8], movement[9],
           movement[10], movement[11], movement[12], movement[13], movement[14], movement[15], movement[16], movement[17], movement[18],
           movement[19], movement[20], movement[21], movement[22], movement[23], movement[24], movement[25], movement[26], movement[27],
           movement[28]

       );

       this.runAction(sequence);
        this.runAction(cc.repeatForever(this.animate));


      },

      removeMonster:function(){
           

          if(this.x>1100){
              this.checkLayer.removeChild(this,true);
               
              this.unschedule(this.removeMonster);
          }
          
      },
    
     saveMagicBulletData:function (magicBulletgroups) {
         this.magicBulletGroups=magicBulletgroups;
     
     },

    judge:function(){

      if(this.magicBulletGroups[0]!=null){
          this.collide();
      }
    },
    
     collide:function (magicBullet) {
              var MonsterTwo=this.getBoundingBox();
         for(i in this.magicBulletGroups){
             var bullet=this.magicBulletGroups[i].getBoundingBox();
             if(cc.rectIntersectsRect(MonsterTwo,bullet)){
           
                 this.magicBulletGroups[i].removeFromParent();
                   this.magicBulletGroups[i] = undefined;
                  this.magicBulletGroups.splice(i, 1);
                  // i = i - 1;

                 var deleteMonster =this.decreaseBlood();
                    if(deleteMonster){

                      
                     this.checkLayer.removeMonsterTwo(this,this.tag);
                      
                    }


             }


         }

     },

     decreaseBlood:function () {
       this.blood=this.blood-2;
          
           
         if(this.blood<1){
        
             return true;
         }
         else {
         
             return false ;
         }



     }
      




});








