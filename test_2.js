var moveZeros = function (arr) {
  let zeroArr = []
  let nonZero =[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]=== 0){
      zeroArr = [...zeroArr,arr[i]]
    } else{
      nonZero =[...nonZero,arr[i]]
    }

  }

  let ans =[...nonZero, ...zeroArr]
  return(ans);
  // TODO: Program me
}

moveZeros([false,1,0,1,2,0,1,3,"a"])