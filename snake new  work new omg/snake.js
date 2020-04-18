class snake1{
    constructor(snake,aplles,ves){
        this.snake=snake;
        this.xyd=[1,0];
        this.aplle=[2,2];
        this.i=0;
        this.aplles=aplles;
        this.input=[];
        this.ves=ves;
    }

    start(){
      this.inp();
      this.neyral();
      this.new();
    }

    draw(){
        fill(250)
        for(let item of this.snake){
            square(item[0]*(25+b)+b,item[1]*(25+v)+v,25);
        }
    }

    new(){
        this.snake.unshift([this.snake[0][0]+this.xyd[0],this.snake[0][1]+this.xyd[1]])
        if(this.check()!==true)this.snake.pop()
    }

    check(){
            if(this.snake[0][0]==this.aplle[0]&&this.snake[0][1]==this.aplle[1]){
                this.i++;
                this.aplle=this.aplles[this.i];
                return true
            }
        
    }
    checkWall(){
        if(this.snake[0][0]==a||this.snake[0][0]<0||this.snake[0][1]==c||this.snake[0][1]<0){
            return true
          }
        if(this.sort())return true

    }

    apllespown(){
        /*aplle.push([Math.floor(random(0, a-1)),Math.floor(random(0, c-1))]);*/
        this.aplle=[Math.floor(random(0, a-1)),Math.floor(random(0, c-1))];
          for(let item of this.snake){
                  if(item[0]==this.aplle[0]&&item[1]==this.aplle[1]){
                    this.aplle=[Math.floor(random(0, a-1)),Math.floor(random(0, c-1))];
                    return
            }
          }
        
      }

    aplleDrow(){
        
            fill(120);
            square(this.aplle[0]*(25+b)+b,this.aplle[1]*(25+v)+v,25);
            
    }

    sort(){
      let i=0;
        for(let item of this.snake){
          if(item[0]==this.snake[0][0]&&item[1]==this.snake[0][1]){
            if(i>0){
            return true;
          }}
          i++
        }
      }

    neyral(){
      let output=[];
      output[0]=0;
      output[1]=0;
      output[2]=0;
      output[3]=0;
      for(let i=0;i<this.input.length;i++){
          output[0]=this.ves[0][i]*this.input[i]+output[0];
          output[1]=this.ves[1][i]*this.input[i]+output[1];
          output[2]=this.ves[2][i]*this.input[i]+output[2];
          output[3]=this.ves[3][i]*this.input[i]+output[3];
      }

      this.xyd=[0,-1];
      let a=output[0];

      if(a<output[1]){a=output[1];this.xyd=[1,0]}
      if(a<output[2]){a=output[2];this.xyd=[0,1]}
      if(a<output[3]){a=output[3];this.xyd=[-1,0]}
        
        
    }  

    inp(){
      let aplle=this.aplle;
      let xy=[this.snake[0][0],this.snake[0][1]];
      let snake=this.snake;
      let input=this.input;
      function vertikal(){
        for(let abc=0;abc<8;abc++){
        let testy=-1;
        let shortDistans=100;
        if(sravnenie(abc,aplle[0],xy[0],aplle[1],xy[1])){
          shortDistans=distans(abc,aplle[0],xy[0],aplle[1],xy[1]);
          testy=1;//console.log('aple',shortDistans)
        }

        for(let item of snake){
          if(sravnenie(abc,item[0],xy[0],item[1],xy[1])){
            if(shortDistans>=distans(abc,item[0],xy[0],item[1],xy[1])){
            shortDistans=distans(abc,item[0],xy[0],item[1],xy[1]);
            testy=-1;//console.log('snake',shortDistans)
          }}
        }
        if(shortDistans==100){            
          if(abc ==0){
            shortDistans=xy[1]+1;
          }else if(abc==2){
            shortDistans=a-xy[0];
          }else if(abc==4){
            shortDistans=c-xy[1];
          }else if(abc==6){
            shortDistans=xy[0]+1;
          }else if(abc==1){
            shortDistans=xy[1]+1;
            if(shortDistans>a-xy[0]){
              shortDistans=a-xy[0];
            }
          }else if(abc==3){
            shortDistans=c-xy[1];
            if(shortDistans>a-xy[0]){
              shortDistans=a-xy[0];
            }
          }else if(abc==5){
            shortDistans=xy[0]+1;
            if(shortDistans>c-xy[1]){
              shortDistans=c-xy[1];
            }
          }else if(abc==7){
            shortDistans=xy[0]+1;
            if(shortDistans>xy[1]+1){
              shortDistans=xy[1]+1;
            }
          }//console.log('wall',shortDistans)
        }
      input[abc]=testy/shortDistans;
      
      }
      //console.log(input)
    }
      function sravnenie(a,b,c,d,e){
        if(a==0){
          return b==c&&d<e
        }
        if(a==1){
          return ((b-c)==(e-d))&&0<(e-d)
        }
        if(a==2){
          return b>c&&d==e
        }
        if(a==3){
          return ((b-c)==(d-e))&&0<(d-e)
        }
        if(a==4){
          return b==c&&d>e
        }
        if(a==5){
          return ((c-b)==(d-e))&&0<(d-e)
        }
        if(a==6){
          return b<c&&d==e
        }
        if(a==7){
          return ((b-c)==(d-e))&&0>(d-e)
        }
      }

      function distans(a,b,c,d,e){
        if(a==0||a==1||a==7){
          return e-d
        }
        if(a==2){
          return b-c
        }
        if(a==4||a==3||a==5){
          return d-e
        }
        if(a==6){
          return c-b
        }
      }

      vertikal()  
      
    }
}