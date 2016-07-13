/**
 * Created by user on 2016/7/6.
 */

var produceMonster= cc.Sprite.extend({
  PathXs:[],
  PathYs:[],
  Path2Xs:[],
  Path2Ys:[],
  SpriteLayer:null,
  BackgroundLayer:null,
    Mmnster1:[],
    MonsterType:0,
    

 ctor:function (layer,bglayer) {
     this._super();

     this.SpriteLayer=layer;
     this.BackgroundLayer=bglayer;


     this.setPath1();this.setPath2();
     this.SpriteLayer.addChild(this);
     this.schedule(this.produMonster,3,50,2);



 },
    produMonster:function () {
          if (this.MonsterType<=20){
              this.MonsterType= this.MonsterType+1;
              this.enemy1();
          }
           if(this.MonsterType>20&&this.MonsterType<30){
              this.MonsterType= this.MonsterType+1;
              this.enemy2();
          }
           if(this.MonsterType>=30){
              this.MonsterType= this.MonsterType+1;
              
               this.enemy3();
          }



    },
    
    enemy1:function () {
        var en =new enemy(this.PathXs,this.PathYs,this.SpriteLayer,this.BackgroundLayer);

        this.Mmnster1.push(en);
        var BmpDect =this.SpriteLayer.BumpDect;
        BmpDect.saveMonster(en);
    },

    enemy2:function(){
        var en =new enemyTwo(this.Path2Xs,this.Path2Ys,this.SpriteLayer,this.BackgroundLayer);
          
        this.Mmnster1.push(en);
        var BmpDect =this.SpriteLayer.BumpDect;
        BmpDect.saveMonster(en);

    },

    enemy3:function () {

        var en =new enemythree(this.PathXs,this.PathYs,this.SpriteLayer,this.BackgroundLayer);

        this.Mmnster1.push(en);
        var BmpDect =this.SpriteLayer.BumpDect;
        BmpDect.saveMonster(en);

    },



    setPath1:function () {
      var px=[];
        px[16]=880; px[15]=804; px[14]=726; px[13]=676; px[12]=650; px[11]=614; px[10]=562; px[9]=507; px[8]=447; px[7]=401; px[6]=346; px[5]=313;
        px[4]=304; px[3]=278; px[2]=235; px[1]=143; px[0]=62;px[17]=1100;
      var py=[];
        py[16]=332; py[15]=337; py[14]=337; py[13]=335; py[12]=293; py[11]=264; py[10]=247; py[9]=244; py[8]=242; py[7]=243; py[6]=263; py[5]=287; py[4]=317; py[3]=332;
        py[2]=329; py[1]=335; py[0]=339;py[17]=332;

        this.PathXs=px;
        this.PathYs=py;

    },

    setPath2:function () {
         var px=[];
         px[0]=76; px[1]=129; px[2]=185; px[3]=233; px[4]=275; px[5]=300; px[6]=325; px[7]=358; px[8]=397; px[9]=434; px[10]=468; px[11]=503;
        px[12]=530; px[13]=555; px[14]=589; px[15]=624; px[16]=650; px[17]=664; px[18]=690; px[19]=725; px[20]=752; px[21]=787; px[22]=822; px[23]=876; px[24]=919;
        px[25]=1000;
        var py=[];
        py[0]=336; py[1]=336; py[2]=336; py[3]=327; py[4]=331; py[5]=366; py[6]=394; py[7]=412; py[8]=425; py[9]=428; py[10]=429; py[11]=425;
        py[12]=425; py[13]=426; py[14]=409; py[15]=391; py[16]=369; py[17]=340; py[18]=339; py[19]=333; py[20]=336; py[21]=335; py[22]=335; py[23]=339; py[24]=335;
        py[25]=335;
        this.Path2Xs=px;
        this.Path2Ys=py;

    }



    
    
});






















// 76.23149394347242:335.935397039031/
// CCDebugger.js:331 129.20592193808884:335.935397039031/
// CCDebugger.js:331 184.76446837146705:335.935397039031/
// CCDebugger.js:331 232.5706594885599:326.89098250336474/
// CCDebugger.js:331 275.2086137281292:330.76716016150743
// CCDebugger.js:331 299.7577388963661:365.6527590847914
// CCDebugger.js:331 324.30686406460296:394.07806191117095
// CCDebugger.js:331 357.90040376850607:412.1668909825034
// CCDebugger.js:331 396.6621803499327:425.0874831763123
// CCDebugger.js:331 434.13189771197847:427.67160161507405
// CCDebugger.js:331 467.7254374158816:428.9636608344549
// CCDebugger.js:331 502.61103633916554:425.0874831763123
// CCDebugger.js:331 529.7442799461642:425.0874831763123
// CCDebugger.js:331 554.2934051144011:422.5033647375505
// CCDebugger.js:331 589.1790040376851:408.2907133243607
// CCDebugger.js:331 624.0646029609691:390.20188425302825
// CCDebugger.js:331 649.9057873485868:368.2368775235532
// CCDebugger.js:331 664.1184387617766:339.8115746971736
// CCDebugger.js:331 689.9596231493944:338.51951547779277
// CCDebugger.js:331 724.8452220726783:333.3512786002692
// CCDebugger.js:331 751.978465679677:335.935397039031
// CCDebugger.js:331 786.864064602961:334.64333781965007
// CCDebugger.js:331 821.749663526245:334.64333781965007
// CCDebugger.js:331 876.0161507402423:338.51951547779277
// CCDebugger.js:331 918.6541049798116:334.64333781965007
//
//













