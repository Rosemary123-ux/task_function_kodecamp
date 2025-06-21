// factorial number
function factorial(n){
  if(n === 0){ 
  return 1
}

else{
  return factorial(n - 1) * n
}

}

console.log(factorial(5));
//output 120
console.log(factorial(8));
//output 40320

// largest number
function largestvalue(arr){

  let largest = [0];

  for(let i = 0; i<arr.length; i++){

    if(arr[i]> largest){

      largest = arr[i];

    }
  }
  return(largest);
}
let arr = [5, 10, 20, 40, 100];

let largest = largestvalue(arr);

console.log(largest);

//printing a table
function multiplicationTable(num) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(6);

// reversing  
function reverseString(mine , yours) {

  let reversed = mine.split("").reverse().join("");

  yours(reversed);

}

function printReversed(mine) {
  console.log(mine);
}

reverseString("my name is Rosemary", printReversed);
// Output: yramesoR si eman ym


//count consonants
function countConsonants(str) {
  let consonants = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char.match(/[a-z]/) && !char.match(/[aeiou]/)) {
      consonants++;
    }
  }
  return consonants;
}

console.log(countConsonants("Hello World")); 
// Output: 7

