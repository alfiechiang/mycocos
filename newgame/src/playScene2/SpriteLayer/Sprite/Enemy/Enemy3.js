/**
 * Created by iii-user on 2016/7/11.
 */

var enemythree= cc.Sprite.extend({
    arryFrame:null,
    Ani:null ,
    arrayPathX:null,
    arrayPathY:null,
    sequence:null,
    SpriteLayer:null,
    Mm:null,
    BackGroundLayer:null,
    dragonBlood:1000,

    ctor:function (arrayX,arrayY,layer,bgLayer) {
        this.BackGroundLayer=bgLayer;
        this.SpriteLayer=layer;
        this.arrayPathX=arrayX;this.arrayPathY=arrayY;
        this.texturePacker();
        this._super(this.arryFrame[0]);
        this.SpriteLayer.addChild(this,1);
        this.go();
        this.schedule(this.overBorder,1,100000000000,1);

        return true;
    },

    texturePacker:function(){
        cc.spriteFrameCache.addSpriteFrames(res.CanibalZombie_plist,res.CanibalZombie_png);
        var ss=[];


        for(var i=1;i<=12;i++){


            var str = "CanibalZombie_" + i + ".png";


            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            ss.push(frame);

        }


        this.arryFrame=ss;
        this.animate();
    },

    animate:function () {



        var ftimme =1.0/15 ;
        var animation = cc.Animation.create(this.arryFrame,ftimme);
        var animate =cc.animate(animation);
        this.Ani =animate;

        this.movePath();
    },



    movePath:function () {

        var movement =[];
        for(var i=1;i<18;i++){
            movement[i]=cc.moveTo(1,cc.p(this.arrayPathX[i],this.arrayPathY[i]));
        }
        var sequence = cc.sequence(
            movement[1], movement[2], movement[3], movement[4], movement[5], movement[6], movement[7],
            movement[8], movement[9], movement[10], movement[11], movement[12], movement[13], movement[14],
            movement[15], movement[16],movement[17]

        );

        this.sequence=sequence;




    },


    go:function () {

        this.setScale(0.5);
        this.x=this.arrayPathX[0];
        this.y=this.arrayPathY[0];


        this.runAction(this.sequence);
        var ss =cc.repeatForever(this.Ani);
        ss.setTag(12);
        this.runAction(ss);



    },

    overBorder:function () {


        if(this.x>1000){

            this.SpriteLayer.removeChild(this,true);
            this.SpriteLayer.deleteHeart();
        }



    },

    myselfBumpDect:function(){



    }







});

