const arr =[4,2,3,5]
var sum
arr.reduce((sum,item)=>{
  console.log(item)
  if(item % 2 !== 0){
    sum+=item
  }
  return sum
},0)
