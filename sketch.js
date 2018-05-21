var aviao1 = {//aviao principal
    x:220,
    y:450    
};
var aviao2 = {//primeiro aviao inimigo 
    x:40,
    y:50    
};
var bala = {
    x:aviao1.x+45,
    y:aviao1.y+40
};

var drop;

var img,img2,img3,img4,img5,imgat,imgfundo,ini0,ini1,ini2,ini3,z=-1000,img0,baner,w=0,r=0,q=0,score,scoredown,song,value=0,speed=6,counter=0,counter2=0,counter3=0,h=40,j=500,counter4=0;

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
    score= loadImage('https://i.imgur.com/iL4mwNK.png');
    scoredown= loadImage('https://i.imgur.com/oHsSO2F.png');
    //baner= loadImage('https://i.imgur.com/QI4ORyz.png');
    //song=loadSound('space.mp3');

}



function setup() {
    createCanvas(1470,650);
    //song.play();
  
    function timeIt(){
        counter++;
    }
    setInterval(timeIt,1000);
      
     
}

function draw() {
    background(0);
    
    z=z+100;//contador para animar avião
    fill(255);
  
  if (keyIsDown(LEFT_ARROW)) {
    aviao1.x -= speed;
    w+=60000;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aviao1.x += speed;
    w++;
  }
    if (keyIsDown(UP_ARROW)) {
    aviao1.y -= speed;
    r+=6000;
  }
    if (keyIsDown(DOWN_ARROW)) {
    aviao1.y += speed;q++;
    
  }
    
  if(aviao1.x>=545){aviao1.x-=speed;}//delimitando o campo direito do jogo
  if(aviao1.x<-37){aviao1.x+=speed;}//delimitando o campo esquerdo do jogo
  if(aviao1.y>510){aviao1.y-=speed;}//delimitando o campo inferior do jogo
  if(aviao1.y<2){aviao1.y+=speed;}//delimitando o campo superior do jogo
    
    z++;
  if(z<-500){
    img0=img;ini0=ini1;}else if(z>-500&&z<200){img0=img2;ini0=ini2;}else if(z>200&&z<900){img0=img3;ini0=ini3;z=-1000}
  
	
  image(imgfundo,0,0);//background
  image(img0, aviao1.x, aviao1.y);//aviao principal
  image(ini0,aviao2.x,aviao2.y);//primeiro aviao inimigo
  //segundo aviao image(ini0,u+95,t+35);
  //image(baner,0,0)
  
  if(aviao2.x<height-250){aviao2.x++;aviao2.y+=2;}else{aviao2.x=0;aviao2.y=0}
 	if((dist(bala.x,bala.y,aviao2.x+70,aviao2.y+60)<40)){
    speed++;}
 
   // if(value==1){
       ellipse(bala.x,bala.y,15,15);//}///se alguma tecla for pressionada desenhar bala//erro só desenhar nao "cria"
    bala.y-=6;
 
    if(bala.y<30){bala.y=aviao1.y+40;bala.x=aviao1.x+45;value=0;}//quando a bala sair da tela, disparar nova bala(problema=1 bala de vez)   
    // stroke(255,0,123);// line(cxb,g,u+70,t+60);//linha para vizualizar distancia da bala do alvo.

   if(dist(bala.x,bala.y,aviao2.x+70,aviao2.y+60)<40){aviao2.x=0;}//verificador de distancia de colisão
    
    textSize(8);
    text('( '+aviao1.x+', '+aviao1.y+' )',aviao1.x+85,aviao1.y+100);//coordenadas
    
          image(score,0,0);//interface grafica ingame superior
          image(scoredown,0,0);//interface grafica ingame inferior
          textSize(20);
    
         if(counter<10&&counter4<1000){
             
            text(counter3+""+counter2+":"+"0"+counter,147,643);
            counter4++;    
             
         }else{ 
             text(counter3+""+counter2+":"+counter,147,643);
         }
          
    if(counter>59){
        counter2++;
        counter=0;
    }
    if(counter2>9){
        counter2=0;
        counter3++;
    }
    
     text(speed,334,643);//speed
     text(q,528,643);//power
    
    if(value==1){ellipse(20,500,15,15);}
   
}
    
function keyPressed(){
    if(key == ' '){value=1;}
}
/////////DUVIDAS////////////////////////////////////
 /*(1)Som não está carregando, bugando o jogo, pq?*/

/*bala[0]=ellipse(aviao1.x,aviao1.y+speed,20,20); tentativa de criar bala*/