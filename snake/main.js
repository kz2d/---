let a;
let b;
let c;
let v;



let snake=[[4,0],[3,0],[2,0],[1,0],[0,0]];
let x=snake[0][0];
let y=snake[0][1];
let xd=1;
let yd=0;
let ax;
let ay;


function setup() {
    createCanvas(windowWidth, windowHeight-4);
    a=Math.floor(width/25);
    b=(width-a*25)/(a+1);
    c=Math.floor(height/25);
    v=(height-c*25)/(c+1); 
    background(0);
    frameRate(10);
    for(let i=0;i<snake.length;i++){
      square(snake[i][0]*(25+b)+b,snake[i][1]*(25+v)+v,25);
  }
  apllespown();
}
  
  function draw() {
    check()
    drowSnake();
  
}

function check(){
  x+=xd;
  y+=yd;
if(x==a||x<0||y==c||y<0){
  frameRate(0);
}
function sort(){
  for(let item of snake){
    if(item[0]==x&&item[1]==y){
      return true;
    }
  }
}
if(sort()){
  frameRate(0);
}

}

  function drowSnake(){
    if(aplleEat()){
    fill(0);
    square(snake[snake.length-1][0]*(25+b)+b,snake[snake.length-1][1]*(25+v)+v,25);
    snake.pop();
  }
    fill(255);
    snake.unshift([x,y]);
    square(x*(25+b)+b,y*(25+v)+v,25);
  }

function apllespown(){
  ax=Math.floor(random(0, a-1));
  ay=Math.floor(random(0, c-1));
  function sort(){
    for(let item of snake){
      if(item[0]==ax&&item[1]==ay){
        return true;
      }
    }
  }
  if(sort()){apllespown()}
  fill(120);
  square(ax*(25+b)+b,ay*(25+v)+v,25);

}

function aplleEat(){
if(x==ax&&y==ay){
  apllespown();
  return false;
}
return true;
}

function keyPressed() {
    if(keyCode===39){
      if(xd!=-1){xd=1;yd=0;}
    }else if (keyCode===40){
      if(yd!=-1){xd=0;yd=1;}
    }else if(keyCode===37){
      if(xd!=1){xd=-1;yd=0;}
    }else if(keyCode===38){
      if(yd!=1){xd=0;yd=-1;}
}
}