function countBy(x, n) {
    let z = [];
    for(let i = x ; i <= n*x ; i=i+x){
        z.push(i)
    }
    console.log(z);
  }
  countBy(3,9)