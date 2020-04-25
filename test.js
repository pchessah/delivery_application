// function gradingStudents(grades) {
//   let gradesArr = [...grades];
//   let n = gradesArr[0];
//   let ans = [];

//   for (let i = 0; i < grades.length; i++) {
//     if ( grades[0]<61) {
//       console.log(n);
//       if (grades[i] % 5 >= 3 && grades[i] > 37 && grades[i] < 101) {
//         let a = Math.ceil(grades[i] / 5) * 5;
//         ans = [...ans, a];
//       } else if (grades[i] > 37 && grades[i] < 101) {
//         ans = [...ans, grades[i]];
//       } else if (grades[i] < 37 && grades[i] > -1) {
//         ans = [...ans, grades[i]];
//       }
//     }
//   }

//   console.log(ans);

//   return ans; // Write your code here
// }

// gradingStudents([90, 73, 67, 38, 33]);

// let n = 7;
// const ar = [10, 2, 10,10,10, 2, 1, 3, 2];

// function sockMerchant() {

//   var counts ={}
//   let total =[]
//   ar.forEach(function(x){ counts[x] = (counts[x] || 0 )+1})
//   // console.log(counts);

//   for(let key in counts){
//     if(counts.hasOwnProperty(key)){
//       if((counts[key]/2)>=1){
//         total =[...total, Math.floor(counts[key]/2)]

//       }
//     }
//   }
//   function add(t,n){
//     return t+n
//   }
//   let ans = total.reduce(add)
//   console.log(ans);
//   return ans

// }

// sockMerchant(ar)

function makeNegative(num) {
  let work = num;
  if (work < 1) {
    return work;
  }

  return -Math.abs(work);
}

makeNegative(9);
