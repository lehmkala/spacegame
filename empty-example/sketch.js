var img,img2,img3,img4,img5,imgat,imgfundo,x=120,y=250,z=-1000,img0,baner,w=0,r=0,q=0,ini1,ini2,ini3,ini0,u=40,t=50,g=y+40,score,scoredown,cxb=x+45,bullet=[],song;
function preload() {
  img = loadImage('https://i.imgur.com/UgyM7W1.png');
  imgat= loadImage('https://i.imgur.com/5pXKgxO.png');
  imgfundo= loadImage('https://i.imgur.com/W3l1HDU.png');
  img2= loadImage('https://i.imgur.com/ByZpJpk.png');
  img3= loadImage('https://i.imgur.com/T4zwKeM.png');
  img4= loadImage('https://i.imgur.com/eyhTvHD.png');
  img5= loadImage('https://i.imgur.com/UAQ5DlR.png');
  ini1= loadImage('https://i.imgur.com/pECNfhS.png');
  ini2= loadImage('https://i.imgur.com/oJzXHL5.png');
  ini3= loadImage('https://i.imgur.com/58J4hXH.png');
    score= loadImage('https://i.imgur.com/E3IRoWX.png');
    scoredown= loadImage('https://i.imgur.com/cY2S3ZJ.png');
  //baner= loadImage('https://i.imgur.com/QI4ORyz.png');
   song=loadSound('space.mp3');

}
function setup() {
 createCanvas(650,650);
    song.play();
}

function draw() {
  background(156);
    z=z+100;
  fill(255);
  
  if (keyIsDown(LEFT_ARROW)) {
    x -= 6;
  w+=60000;
  }
  

  if (keyIsDown(RIGHT_ARROW)) {
    x += 6;
w++;
  }
    if (keyIsDown(UP_ARROW)) {
    y -= 6;
     r+=6000;
  }
    if (keyIsDown(DOWN_ARROW)) {
    y += 6;q++;
    
  }
  if(x>width-20){
    x--;
  }
  z++;
	if(z<-500){
    img0=img;ini0=ini1;}else if(z>-500&&z<200){img0=img2;ini0=ini2;}else if(z>200&&z<900){img0=img3;ini0=ini3;z=-1000}
  
	
  	image(imgfundo,0,0);
  image(img0, x, y);
  image(ini0,u,t);
  //segundo aviao image(ini0,u+95,t+35);
  //image(baner,0,0)
  
  if(u<height-250){u++;t+=2;}else{u=0;t=0}
 	
  textSize(20);
  text(w,147,26);//score
  text(r,328,26);//speed
  text(q,508,26);//power
  g-=6;
  if(g<30){g=y+40;cxb=x+45;}
  ellipse(cxb, g, 7, 7);//bullet
  
   
    image(score,0,0);
    image(scoredown,0,0);
    textSize(8);
    text('( '+x+', '+y+' )',x+85,y+100);
}