let a;
let b;
let c;
let v;
let count=0;
let best;


let snake;
let snaake=[];
let aplle=300;
let kk=[];
let aplles=[];
let maxCounter=100;


function setup() {
    createCanvas(300, 300);
    a=Math.floor(width/25);
    b=(width-a*25)/(a+1);
    c=Math.floor(height/25);
    v=(height-c*25)/(c+1); 
    background(0);
    frameRate(10);

    for(let i=0;i<100;i++){
      aplles[i]=[Math.floor(random(0, a-1)),Math.floor(random(0, c-1))];
    }

    for(let i=0;i<2000;i++){
      let ves=[[1,1,1,1,0,1,0,1],[0,1,1,1,0,1,1,0],[0,1,0,1,1,1,0,1],[0,1,1,0,0,1,1,1,]];
     /* for(let i=0;i<9;i++){
        ves[0][i]=random(0, 2);
        ves[1][i]=random(0, 2);
        ves[2][i]=random(0, 2);
        ves[3][i]=random(0, 2);
      }console.log(ves)*/
      kk[i]=new snake1([[1,1]],aplles,ves)
    }
    gen()
}
  
  function draw() {
    background(0);
    for(let i=0;i<a;i++){
      for(let d=0;d<c;d++){
          fill(50)
          square(i*(25+b)+b,d*(25+v)+v,25);
      }
  }

    for(let i=0;i<kk.length;i++){
      kk[i].start()
      if(kk[i].checkWall()){kk.splice(i,1);i--}
    }console.log(kk)
  kk[0].aplleDrow();
  kk[0].draw();
  count++;
  if(count>maxCounter){
    count=0;
    gen()
    
  }
  snake=kk.slice()
}

function gen(){
  best=[];
  function compareNumeric(a, b) {
    if (a.i > b.i) return -1;
    if (a.i == b.i) return 0;
    if (a.i < b.i) return 1;
  }
  
  kk.sort(compareNumeric);
  best=kk.slice(0,50);
  
  console.log(best);snaake.push(best.slice())
  for(let i=0;i<50;i++){
    let a=[[],[],[],[]];
    for(let e=0;e<4;e++){
      a[e]=best[i].ves[e].slice();
    }
    kk[i*10]=new snake1([[1,1]],aplles,a);
    for(let z=1;z<80;z++){
      let a=[[],[],[],[]];
      for(let e=0;e<4;e++){
        a[e]=best[i].ves[e].slice();
      }

      let c=Math.floor(random(0,8));
      let g=Math.floor(random(0,4));
      let v=random(-3,3);console.log(a)
      a[g][c]+=v;
      kk[i*10+z]=new snake1([[1,1]],aplles,a);
      console.log(kk[i*10+z].ves,g,c,v)
      console.log(a)
    }
  }
}

function keyPressed() {
    if(keyCode===39){
      frameRate(1)
    }else if (keyCode===40){
      frameRate(10)
    }else if(keyCode===37){
      frameRate(aplle);
      aplle*=2;
    }else if(keyCode===38){
      if(snake.xyd[1]!=1){snake.xyd=[0,-1]}
    }else if(keyCode===32){
      frameRate(0);console.log(snake);console.log(snaake);
      maxCounter*=2;
    }else if(keyCode===97){
      maxCounter/=2;
    }
}