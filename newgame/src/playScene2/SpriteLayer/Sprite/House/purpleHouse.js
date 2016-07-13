/**
 * Created by user on 2016/7/9.
 */


var purpleHouse= cc.Sprite.extend({
    BackgroundLayer:null,
    SpriteLayer:null,
    Monster1:[],
    magicBullet:[],
    label:0,
    ctor:function (positionX,positionY,bglayer,splayer) {
        this._super(res.purpleHouse_png);
        this.BackgroundLayer=bglayer;
        this.SpriteLayer=splayer;
        this.x=positionX;
        this.y=positionY+10;

        this.SpriteLayer.addChild(this);
        this.schedule(this.distanceDect,1,100000000000,1);
    },



    distanceDect:function () {

        var monster1= this.SpriteLayer.BumpDect.MonsterGroups;

        var x1=this.x;var y1=this.y;


        if(monster1[0]!=null){
            for(var i=0;i<monster1.length;i++){
                var x2=monster1[i].x;
                var y2=monster1[i].y;


                var distanceX=x1-x2;
                var  distancey=y1-y2;
                var s =distanceX*distanceX+distancey*distancey;
                var directDistance=	Math.sqrt(s);

                if (directDistance<100){
                    this.attack(monster1[i]);

                    break;
                }

            }
        }

    },

    attack:function (mm) {
        var monster=mm
        var BmpDect=this.SpriteLayer.BumpDect;

        var bu= new purplebullet(this,monster,this.SpriteLayer);
        BmpDect.savepurpleBullet(bu);


    }







});