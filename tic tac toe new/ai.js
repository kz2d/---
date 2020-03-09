class ai3{
    constructor() {
        this.tic;
        this.a;
      }

    line(f){
    for(let i=0;i<this.a;i++){
      if(this.chekline2(i,f)){
      return true;
    }
    if(this.chekline1(i,f)){
      return true
  }}
  if(this.diogonal2(f)){
    return true}
  if(this.diogonal1(f)){
    return true}
    return false
  }

   ai1(){
    for(let i=0;i<this.a;i++){
      for(let s=0;s<this.a;s++){
        if(this.tic[i][s]===''){
            this.tic[i][s]=0;
          if(this.line(0)){this.drow(i,s);return}
          if(this.ai0()===false){this.drow(i,s);return}
          this.tic[i][s]='';
        }
      }
    }
    for(let i=0;i<this.a;i++){
      for(let s=0;s<3;s++){
        if(this.tic[i][s]===''){
            this.tic[i][s]=0;
            this.drow(i,s);return
        }
}}}
  
   ai(){
    if(this.dro()){
    for(let i=0;i<this.a;i++){
      for(let s=0;s<this.a;s++){
        if(this.tic[i][s]===''){
          this.tic[i][s]=0;
          if(this.line(0)){this.tic[i][s]='';return true;}
          if(this.ai0()===false){this.tic[i][s]='';return true;}
          this.tic[i][s]='';
        }
      }
    }return false;
  }return true;
}

  ai0(){
    for(let i=0;i<this.a;i++){
      for(let s=0;s<this.a;s++){
        if(this.tic[i][s]===''){
          this.tic[i][s]='x';
          if(this.line('x')){this.tic[i][s]='';return true;}
          if(this.ai()===false){this.tic[i][s]='';return true;}
          this.tic[i][s]='';
        }
      }
    }return false;
  }

   drow(x,y){
      fill(120);
      ellipse((y+0.5)*width/this.a, (x+0.5)*height/this.a, 0.4*width/this.a)
  }
  chekline1(i,f){
      for(let s=1;s<this.a;s++){
        if(this.tic[i][s-1]!==this.tic[i][s])return false
      }
    if(this.tic[i][0]!==f)return false
    return true;
  }
  chekline2(i,f){
    for(let s=1;s<this.a;s++){
      if(this.tic[s-1][i]!==this.tic[s][i])return false
    }
  if(this.tic[0][i]!==f)return false
  return true;
}
  diogonal1(f){
    for(let s=1;s<this.a;s++){
      if(this.tic[s-1][this.a-s]!==this.tic[s][this.a-s-1])return false
   }
  if(this.tic[0][this.a-1]!==f)return false
  return true;
  }
  diogonal2(f){
    for(let s=1;s<this.a;s++){
      if(this.tic[s][s]!==this.tic[s-1][s-1])return false
   }
  if(this.tic[0][0]!==f)return false
  return true;
  }
  dro(){
    for(let i=0;i<this.a;i++){
      if(this.tic[i].includes(''))return true
    }
  }
  
}