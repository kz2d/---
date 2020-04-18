let a;
let b;
let c;
let v;
let count=0;
let best;


let aplles=[];
let snake;



function setup() {
    createCanvas(200, 200);
    a=Math.floor(width/25);
    b=(width-a*25)/(a+1);
    c=Math.floor(height/25);
    v=(height-c*25)/(c+1); 
    background(0);
    frameRate(1);
    for(let i=0;i<100;i++){
        aplles[i]=[Math.floor(random(0, a-1)),Math.floor(random(0, c-1))];
      }
    snake=new snake1([[0,1],[1,1]],aplles,[1,1])
}
  
  function draw() {
    background(0);
    for(let i=0;i<a;i++){
        for(let d=0;d<c;d++){
            fill(50)
            square(i*(25+b)+b,d*(25+v)+v,25);
        }
    }
    snake.new();
  snake.aplleDrow();
  snake.draw();
  snake.inp();
}

function gen(){
  best=[];
  function compareNumeric(a, b) {
    if (a.i > b.i) return -1;
    if (a.i == b.i) return 0;
    if (a.i < b.i) return 1;
  }
  
  kk.sort(compareNumeric);
  best=kk.slice(0,10);
  
  console.log(best);snaake.push(best.slice())
  for(let i=0;i<10;i++){
    let a=[[],[],[],[]];
    for(let e=0;e<4;e++){
      a[e]=best[i].ves[e].slice();
    }
    kk[i*10]=new snake1([[1,1]],aplles,a);
    for(let z=1;z<200;z++){
      let a=[[],[],[],[]];
      for(let e=0;e<4;e++){
        a[e]=best[i].ves[e].slice();
      }

      let c=Math.floor(random(0,9));
      let g=Math.floor(random(0,4));
      let v=random(-2,2);console.log(a)
      a[g][c]*=v;
      kk[i*10+z]=new snake1([[1,1]],aplles,a);
      console.log(kk[i*10+z].ves,g,c,v)
      console.log(a)
    }
  }
}

function keyPressed() {
    if(keyCode===39){
      snake.xyd=[1,0]
    }else if (keyCode===40){
      snake.xyd=[0,1]
    }else if(keyCode===37){
      snake.xyd=[-1,0]
    }else if(keyCode===38){
        snake.xyd=[0,-1]
    }else if(keyCode===32){
      frameRate(0);
    }else if(keyCode===97){
      frameRate(1);
    }
}