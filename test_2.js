function comp(array1, array2) {
  if (
    array1.length == 0 ||
    array2.length == 0 ||
    array1[0] == null ||
    array2[0] == null
  ) {
  
    return false;
  } else {
    let sort1 = array1.sort((a, b) => a - b);
    let sort2 = array2.sort((a, b) => a - b);
    let sqrRoot = sort2.map((item) => Math.sqrt(item));


    for (let i = 0; i < sort1.length; i++) {
      if (sort1[i] != sqrRoot[i])
      return false
      return true           
      } 
    }
  }

  //your code here

comp(
    [72, 24],
    [5185, 576]
);
