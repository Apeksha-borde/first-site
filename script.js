// const profile={
//      Name:"apeksha",
//      followers:40,
//      following:30,
//      isfollow:true,

// }

// console.log(profile);


// for(let i=1;i<=100;i++){
//      console.log("Apeksha");
// }
// let sum=0;
// for(i=1;i<=5;i++){
//      sum=sum+i;
// }
// console.log(sum);

// let i=1;
// while(i<=15){
//     console.log(i)
//     i++;
// }

// let j=10;
// do{
//     console.log(j,"apeksha") 
//     j++
// }while(j<=20)

// let k=0;
// do{
//     console.log(k,"sakshi")
// }while(k<=30);


// for(i=1;i<=20;i++){
//     console.log(i)
// }


// let str = "hello world";

// console.log(str.length);



// let str = "hello";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);





// // let str = "javascript";

// // let result = str[0].toUpperCase() + str.slice(1);

// // console.log(result);




// let str = "JavaScript is a powerful language";

// let words = str.split(" ");

// console.log(words);






// let str = "Apeksha is a very smart";

// let words = str.split(" ");

// console.log(words);




// let str = "madam";

// let reversed = str.split("").reverse().join("");

// if (str === reversed) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }


// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits);



// let fruits = ["Apple", "Banana", "Mango"];

// fruits.pop();

// console.log(fruits);






// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.includes("Banana"));


// let arr = [1,2,3,4,5];
// let target = 5;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }





// function flatten(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// let arr = [1, [2, [3, 4]], 5];

// console.log(flatten(arr));



// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Apeksha");


// const subtract = (a, b) => {
//   return a - b;
// };

// console.log(subtract(10, 4));


// function add(a, b) {
//   return a + b;
// }

// let result = add(5, 3);
// console.log(result);




// function memoize(fn) {
//   const cache = {};

//   return function(n) {
//     if (cache[n]) {
//       return cache[n];
//     }

//     const result = fn(n);
//     cache[n] = result;
//     return result;
//   };
// }

// function factorial(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// const fastFactorial = memoize(factorial);

// console.log(fastFactorial(5));
// console.log(fastFactorial(5)); 



// function validateEmail(email) {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (pattern.test(email)) {
//     return "Valid Email";
//   } else {
//     return "Invalid Email";
//   }
// }

// console.log(validateEmail("test@gmail.com"));

// function isValidPassword(password) {
//   return password.length >= 8;
// }

// console.log(isValidPassword("abc12345"));


function validatePhone(phone) {
  return phone.length === 10;
}

console.log(validatePhone("9876543210"));