let y=0;
let t=0;
let x;
let value;
let kek=[[800,0]];
let kak=[];

function setup() {
    createCanvas(windowWidth, windowHeight-4);
    noStroke();
    fill(0);
    frameRate(30);
    x=width;
    spown();
}
  
function draw() {
    background(255);
    rect(0, height/3*2, width, 2);
    if(keyIsDown(UP_ARROW)||y!=0){
    jump();}
    square(100,(height/3*2-40)+y,40); 
    kaktus();
    check();
}

function jump(){
    y=-t*20+1*t*t/2;
    t++;
    if(y==0)t=1; 
}

function kaktus(){
    for(let i=0;i<kek.length;i++){
    kek[i][0]-=8;
    if(kek[i][1]==1){
    square(kek[i][0],height/3*2-40,40);
    }else if(kek[i][1]==2){
        rect(kek[i][0],height/3*2-40,100,40);
    }else if(kek[i][1]==3){
        rect(kek[i][0],height/3*2-100,60,100);
    }
}
if(kek[kek.length-1][0]<(width-value)){
    kek.push([width,0]);
    kek[kek.length-1][1]=Math.floor(random(1, 4));
    spown();
}
if(kek[0][0]<-100){kek.shift()}
}

function check(){
for(let i=0;i<1;i++){
    if(kek[i][1]==1){
        if(kek[i][0]<140&&kek[i][0]>60&&-y<40)frameRate(0)
    }else if(kek[i][1]==2){
        if(kek[i][0]<140&&kek[i][0]>0&&-y<40)frameRate(0)
    }else if(kek[i][1]==3){
        if(kek[i][0]<140&&kek[i][0]>40&&-y<100)frameRate(0)
    }
}
}

function spown(){
    value=random(400, 600);
}

