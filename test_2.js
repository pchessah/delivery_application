function pigIt(str) {
  let arr = str.split(" ");
  let ansArr = []

  for (let i = 0; i < arr.length; i++) {
    let oneWord = arr[i].split("");
    pigWord = oneWord.shift();
    if(pigWord.match(/^[A-Za-z]+$/)){

        oneWord.push(pigWord,"a","y");
    } else {
        oneWord.push(pigWord);

    }
    ansArr=[...ansArr, oneWord.join("")]
   
  }
console.log(ansArr.join(" "));
return ansArr.join(" ")
  //Code here
}

pigIt("Quis custodiet ipsos custodes ?");
