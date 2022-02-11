let aa=(f, s, t)=> {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
}
aa(5, 4, 10);


// ________________________________________


function add(n) {
    let sum = 0;
    for (var i = 0; i < n.length; i++){
        sum+=n[i];
    }
  console.log(sum)
}
add([1,2,3,4,5,6,7,8,9,10])

// ________________________________________


const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

// ________________________________________


var ano = function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano(["guvi", "geek", "zen", "fullstack"]);

________________________________________


const newArray = [1, 3, 2, 5, 10,12,14];
const myPrime = newArray.filter((num) => {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return true;
    }
    return num === 1;
  }
});
console.log(myPrime);

// ________________________________________


const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const sum1 = num.reduce(sum);
console.log(sum1);

// ________________________________________


var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 1) {
 console.log(arr[i]);
 }}
})();

// ________________________________________


(function(str){
 let str1 = str.split("").reverse().join("");
 console.log(str1);
})("abcd")


// ________________________________________
