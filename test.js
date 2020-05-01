function getDayName(dateString) {
  let dayName;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var d = new Date(dateString);

  dayName = days[d.getDay()];

  return dayName;
}

getDayName("12/07/2016");

// function duplicateCount(text) {
//   let textArr = text.split("");
//   let textCase = textArr.map((item) => item.toLowerCase());
//   let a = [],
//     b = [],
//     prev;
//   textCase.sort();

//   for (let i = 0; i < textCase.length; i++) {
//     if (textCase[i] !== prev) {
//       a.push(textCase[i]);
//       b.push(1);
//     } else {
//       b[b.length - 1]++;
//     }
//     prev = textCase[i];
//   }
//   let check = b.filter((item) => item > 1);
//   let ans = check.join();
// console.log(ans);
//   if (ans == "") {
//     console.log(0);
//     return 0;
//   } else if (check[0] == check[1]) {
//     console.log(ans[0]);
//     return ans[0];
//   } else if(check[0] !== check[1]){
//       console.log(ans);
//       return ans

//   }
// }
// duplicateCount("Indivisibility")
