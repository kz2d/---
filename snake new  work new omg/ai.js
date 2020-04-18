//vhod
let


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




//output
this.xyd=[0,-1];
let a=output[0];

if(a<output[1]){a=output[1];this.xyd=[1,0]}
if(a<output[2]){a=output[2];this.xyd=[0,1]}
if(a<output[3]){a=output[3];this.xyd=[-1,0]}
//  output end
  