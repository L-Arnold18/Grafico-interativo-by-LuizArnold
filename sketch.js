let img;
function preload() {
  img = loadImage('painel-desenho-infantil-fazendinha-fazenda-sitio-3d-3x2m-foto.jpg');
}
var a = 2
var valor1 = "10%"
var valor2 = "40%"                                                   
    var valor3 ="70%"
var mover = 355
var x = 80 
var y =97
var local=1
var tela = 0
function setup() {
  createCanvas(400, 400);
} 
function draw() {
  background(230);
  
  if(tela==0){
    menu()
  } 
  if(tela==1){
    jogar()
  }
  if(tela==2){
    instruções()
  }
  if(tela==3){
  créditos()
  }
    if(tela==4){
      fase2()
    }
  if(tela==5){
      fase3()
} 
function jogar(){
  image(img, 0,0);
   textSize(23);
    text("coloque a linha na porcentagem "+valor1+" \npara concuir a fase.",15,40);
  
  textSize(15);
    text("100%",160,160);
  text("90%",160,180);
  text("80%",160,200);
  text("70%",160,220);
  text("60%",160,240);
  text("50%",160,260);
  text("40%",160,280);
  text("30%",160,300);
  text("20%",160,320);
  text("10%",160,340);
  text("00%",160,360);
   
  

  rect(110, 155, 40, 200);
  strokeWeight(2.20);
  strokeCap(SQUARE);
line(100,mover , 150, mover);
  strokeCap(SQUARE);
line(110,355 , 160, 355);
  strokeCap(SQUARE);
line(110,335 , 160, 335);
   strokeCap(SQUARE);
line(110,315 , 160, 315);
  strokeCap(SQUARE);
line(110,295 , 160, 295);
  strokeCap(SQUARE);
line(110,275 , 160, 275);
  strokeCap(SQUARE);
line(110,255 , 160,255 );
  strokeCap(SQUARE);
line(110,235 , 160, 235);
  strokeCap(SQUARE);
line(110,215 , 160, 215);
  strokeCap(SQUARE);
line(110,195 , 160, 195);
  strokeCap(SQUARE);
line(110,175 , 160, 175);
  strokeCap(SQUARE);
line(110,155 , 160, 155);

}



function fase2(){
  image(img, 0,0);
   textSize(23);
    text("coloque a linha na porcentagem "+valor2+" \npara concuir a fase.",15,40);
  
  textSize(15);
    text("100%",160,160);
  text("90%",160,180);
  text("80%",160,200);
  text("70%",160,220);
  text("60%",160,240);
  text("50%",160,260);
  text("40%",160,280);
  text("30%",160,300);
  text("20%",160,320);
  text("10%",160,340);
  text("00%",160,360);
   
  

  rect(110, 155, 40, 200);
  strokeWeight(2.20);
  strokeCap(SQUARE);
line(100,mover , 150, mover);
  strokeCap(SQUARE);
line(110,355 , 160, 355);
  strokeCap(SQUARE);
line(110,335 , 160, 335);
   strokeCap(SQUARE);
line(110,315 , 160, 315);
  strokeCap(SQUARE);
line(110,295 , 160, 295);
  strokeCap(SQUARE);
line(110,275 , 160, 275);
  strokeCap(SQUARE);
line(110,255 , 160,255 );
  strokeCap(SQUARE);
line(110,235 , 160, 235);
  strokeCap(SQUARE);
line(110,215 , 160, 215);
  strokeCap(SQUARE);
line(110,195 , 160, 195);
  strokeCap(SQUARE);
line(110,175 , 160, 175);
  strokeCap(SQUARE);
line(110,155 , 160, 155);



}

function fase3(){image(img, 0,0);
   textSize(23);
    text("coloque a linha na porcentagem "+valor3+" \npara concuir o jogo.",15,40);
  
  textSize(15);
    text("100%",160,160);
  text("90%",160,180);
  text("80%",160,200);
  text("70%",160,220);
  text("60%",160,240);
  text("50%",160,260);
  text("40%",160,280);
  text("30%",160,300);
  text("20%",160,320);
  text("10%",160,340);
  text("00%",160,360);
   
  

  rect(110, 155, 40, 200);
  strokeWeight(2.20);
  strokeCap(SQUARE);
line(100,mover , 150, mover);
  strokeCap(SQUARE);
line(110,355 , 160, 355);
  strokeCap(SQUARE);
line(110,335 , 160, 335);
   strokeCap(SQUARE);
line(110,315 , 160, 315);
  strokeCap(SQUARE);
line(110,295 , 160, 295);
  strokeCap(SQUARE);
line(110,275 , 160, 275);
  strokeCap(SQUARE);
line(110,255 , 160,255 );
  strokeCap(SQUARE);
line(110,235 , 160, 235);
  strokeCap(SQUARE);
line(110,215 , 160, 215);
  strokeCap(SQUARE);
line(110,195 , 160, 195);
  strokeCap(SQUARE);
line(110,175 , 160, 175);
  strokeCap(SQUARE);
line(110,155 , 160, 155);

}
  
}
function instruções(){
  image(img, 0,0);
  textSize(15);
    text("use a tecla cima e baixo do seu teclado para movimentar\n o marcador do grafico e quando estiver no local correto \n tecle direita para confirmar sua resposta",10,30);

}
function créditos(){
  image(img, 0,0);
  textSize(15);
    text("Discente:Luiz Arnold Olivera de Alencar \n Dorcente: ORIVALDO VIEIRA DE SANTANA JUNIOR",10,30);

}
function menu(){
  
  image(img, 0,0)
  rect(x,y,170,45);
  textSize(32);
  text("Jogar",90,130);
  text("Instruções",90,230);
  text("Créditos",90,330);
  
}
function keyPressed(){

  
  
  
  
  
  
  if(key=="ArrowUp" && y>130){
    y=y-100; local=local-1 
  } 
  if(key=="ArrowDown" && y<290 ){ 
    y=y+100; local=local+1 
  }
  if(key=="Enter"){
    tela=local
  
  }
  if(key=="Backspace"){
    tela=0
  }
  if(key=="ArrowUp"&& mover>155){
    mover=mover-5 ;
   }
   if(key=="ArrowDown" && mover<355 ){ 
  mover=mover+5 ; 
}
  
   if(key=="ArrowRight"&& mover==335 && tela==1){
    tela=4
  }
  if(key=="ArrowRight"&& mover==275 && tela==4){
    tela=5
  }
    if(key=="ArrowRight"&& mover==215 && tela==5){
    tela=0
  


  
  }
  
}