let ai=new ai3();
function setup() {
    createCanvas(windowHeight, windowHeight);
    noStroke();
    fill(0);
    background(200);
    frameRate(30);
    
    ai.a=5;
    ai.tic=new Array(ai.a);
    for(let i=0;i<ai.a;i++){
        ai.tic[i]=new Array(ai.a);
        for(let y=0;y<ai.a;y++){
            ai.tic[i][y]='';
        }
    }
    for(let i=1;i<ai.a;i++){
        rect(i*width/ai.a-10,0,20,width);
        rect(0,i*height/ai.a-10,width,20);
    }
    console.log(ai.tic)
}
  
/*function draw() {
    if(ai.line(0)){
        alert('i wonn');
    }
    if(ai.line('x')){
        alert('you wonn');
    }

}*/
function mouseClicked(){
    for(let i=0;i<ai.a;i++){
        for(let y=0;y<ai.a;y++){
    if (mouseX > i*width/ai.a && mouseX < (1+i)*width/ai.a && mouseY > y*height/ai.a && mouseY < (1+y)*height/ai.a) {
        if(ai.tic[y][i]===''){
        cross(i,y);
        ai.tic[y][i]='x';
        ai.ai1();console.log(ai.tic)
        }
      }
        }
    }
}
function cross(x,y){
    fill(0);
    rect((x+0.1)*width/ai.a, (y+0.1)*height/ai.a, 0.8*width/ai.a, 0.8*height/ai.a)
}