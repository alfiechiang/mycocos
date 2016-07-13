/**
 * Created by user on 2016/7/5.
 */
var SpriteLayer = cc.Layer.extend({
    sprite:null,
    BackLayer:null,
    SpriteProduceMonster:null,
    BumpDect:null,
    Heart1:null,
    Heart2:null,
    Heart3:null,
    HeartTag:3,
    Scene:null,
    ctor:function (scene) {
        this.Scene=scene;
        this._super();
     
        var size=cc.winSize;

        cc.eventManager.addListener({
            event:cc.EventListener.MOUSE,
            onMouseDown:function (event) {


  

                cc.log(event.getLocationX()+":"+event.getLocationY());




            }

        },this);

        this.addHeart();

        return true;
    },

    saveBgLayer:function (bglayer) {
        
        this.BackLayer=bglayer;
        var bmpDect= new bumpDetect(this,this.BackLayer);/////////////////碰撞檢測器
        this.BumpDect=bmpDect;
        this.addChild(bmpDect);
        this.produceMonster();
    },

    produceMonster:function(){
        var produMonster = new produceMonster(this,this.BackLayer);
         this.SpriteProduceMonster=produMonster;
    },


    addHeart:function () {
      var heart1 =new Heart(this,114,526);
      var heart2= new Heart(this,144,526);
      var heart3= new Heart(this,174,526);
       this.Heart1=heart1;
        this.Heart2=heart2;
        this.Heart3=heart3;
        
     
    },

    deleteHeart:function () {
         if(this.HeartTag==3){
             this.removeChild(this.Heart3,true);
             this.HeartTag=this.HeartTag-1;
         }

        else if(this.HeartTag==2){

            this.removeChild(this.Heart2,true);
            this.HeartTag=this.HeartTag-1;
            
        }
        else if(this.HeartTag==1){

            this.removeChild(this.Heart1);
            this.HeartTag=this.HeartTag-1;
             var lose = new loseMenu(this.BackLayer);
            this.Scene.removeChild(this,true);

        }
    },




    getMagicHouse:function (maghou) {

    }




});