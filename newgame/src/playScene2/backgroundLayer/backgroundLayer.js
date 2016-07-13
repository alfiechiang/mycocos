/**
 * Created by user on 2016/7/5.
 */
var backgroundLayer = cc.Layer.extend({
    sprite:null,
    SpriteLayer:null,
    magicHou:[],
    Monster1:null,
    magicCol:null,
    purpleCol:null,
    Money:null,
    
    ctor:function (splayer) {
        this.Monster1=[];
        this.SpriteLayer=splayer;
        this._super();
        var size = cc.winSize;
        var backgoiund = new cc.Sprite(res.desertMap_png);
        backgoiund.x = size.width / 2;
        backgoiund.y = size.height / 2;
        this.addChild(backgoiund);
        
        var money= new coin(this.SpriteLayer,841,529);
        this.Money=money;

      this.produceLand();
        return true;


    },

    produceLand:function () {
        this.land(396,305);this.land(473,296);this.land(526,301);this.land(580,317);
        this.land(393,364);this.land(439,376);this.land(503,382);this.land(560,363);
        this.land(268,231);this.land(476,184);this.land(268,449);this.land(715,430);

    },



    land:function (positionX,positionY) {
        var positionX= positionX;
        var positionY=positionY;

        var land = new cc.MenuItemImage(
            res.land_png,
            res.land_png,
            function () {

                this.Column(positionX,positionY);
            },
           this
        );

        var mu =new cc.Menu(land);
        mu.x=positionX;
        mu.y=positionY;
        this.addChild(mu);

    },



    Column:function (positionX,positionY) {


        var magicCol=new cc.MenuItemImage(
            res.magic_png,
            res.magic_png,
            function () {
               if(this.Money.judgeEnoughMoney()) {
                   this.magicHouse(positionX, positionY);
               }
                magicCol.setVisible(false);
                purpleCol.setVisible(false);
            },
            this
        );
        magicCol.x=30;
        magicCol.y=30;
        var  purpleCol =new cc.MenuItemImage(
            res.purpleColumn_png,
            res.purpleColumn_png,
            function(){
                if(this.Money.judgeEnoughMoney()) {
                    this.purpleHouse(positionX, positionY);
                }
                magicCol.setVisible(false);
                purpleCol.setVisible(false);
            },
            this
        );


        var mu =new cc.Menu(magicCol,purpleCol);
        mu.x=positionX+80;
        mu.y=positionY+80;
        mu.setOpacity(128);
        this.addChild(mu);


    },



    saveMonster1:function(monster1){
        this.Monster1.push(monster1);
    },

    magicHouse:function (positionX,positionY) {
        
           var magichouse =new magicHouse(positionX,positionY,this,this.SpriteLayer);
        this.SpriteLayer.getMagicHouse(magichouse);
           this.magicHou.push(magichouse);

    },

    purpleHouse:function(positionX,positionY){

        var purhouse =new purpleHouse(positionX,positionY,this,this.SpriteLayer);
       


    }







    
});







// this.land(376,306);this.land(409,285);this.land(466,274);this.land(520,279);//this.land(363,340);
// this.land(383,372);
// this.land(561,301);this.land(426,383);this.land(479,391);this.land(531,389);this.land(567,372);this.land(261,240);
// this.land(228,394);this.land(670,420);this.land(760,282);






