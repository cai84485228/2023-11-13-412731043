var sound1
function preload(){
  sound1 = loadSound("Jeremy Zucker - always, ill care (Lyric Video).mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background("#edede9");
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
  
  }
  var w =100
  var s_w=50
  function draw() {
    background("#fefae0");
    rectMode(CENTER) //設定方框中心點為方框的座標點。
    noFill()
  textSize(100) //文字大小
  //text(教育科技學系,width/2-150,height/2-25) //位置至中
  text("嗨",mouseX,mouseY); //跟著滑鼠移動
  textSize(50)//滑鼠的x y軸size的大小
  text("x:"+mouseX+", y:" + mouseY,800,500);

      for( var y=50;y<=width;y=y+w){
        for(var x=50;x<=width+50;x=x+w){
          stroke("#d4a373")
        strokeWeight(4)
        ellipse(x,y,w+mouseX/20)
        stroke("#d6ccc2")
        strokeWeight(2)
        rect(x,y,w+mouseX/20)
          stroke("#efd3d7")
        strokeWeight(4)
          ellipse(x+50,y*2,s_w+mouseX/20)
            strokeWeight(5);
            x=x+w

      }
    
    }
    
  }


  //按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}
