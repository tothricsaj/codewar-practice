const omnibool = {n:true, valueOf: ()=>this.n=!this.n};

console.log(omnibool == true);
console.log(omnibool == false);
console.log(+omnibool);
console.log(!+omnibool);
