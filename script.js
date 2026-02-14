// var age =Number(prompt("Enter tour age"))

// if (age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("tou cant vote")
// }


// Binary


// && (*)

// 0   0    =   0  

// 1   0    =   0

// 0   1    =   0

// 1   1   =    1



// || (+)

// 0   0   =   0

// 0   1   =   1

// 1   0   =   1

// 1   1   =   1



// var age=20

// if(age>18 && age>60){
//     console.log("you can vote");
// }
// else{
//     console.log("no");
// }






// var a = 10
// var b=  "10"

// if (a===b){
//     console.log("true")
// }
// else{
//     console.log("false")
// }




// var units=Number(prompt("enter your number"))

// var bill

// if (units>=100){
//     bill=units*10
// }
// else if (units>50){
//     bill=units*8
// }
// else{
//     bill=units*5
// }
// console.log(bill);









// const student={

//     fulname:"apeksha",
//     age:20,
//     cgpa:8.45,
//     ispass:true,

// };

// student["age"]=student["age"] + 1

// student["ispass"]=false;
// console.log(student["ispass"]);
// console.log(student["cgpa"]);  
// console.log(student["fulname"]);
// console.log(student["ispass"]);







// const product={

//     title:"ball pen",
//     rating:4,
//     offer:5,
//     price:270,
// }


// console.log(product); 






// we can update let variable 

// not update const variable 

// but in object of const we update keyof a object






// const profile={
//     username:"apeksha",
//     isfollow:false,
//     following:100,
//     followers:100,
// };

// console.log(typeof profile[(following)]);
 


// console.log("print hello");


// let a= 6;
// let b=7;

// console.log("a=",a,"& b=",b);

// a=a+1;
// // console.log(a);


// let a=7;
// let b=5;

// a++;
// console.log("a++","=",a++);




// comparision operator

// let a=10;
// let b=9;

// console.log("10<9",a>b);



//  let num = 10;

// if (num%2===0){
//     console.log(num,"is even")
// }
// else{
//     console.log(num,"is odd")
// }



// let mode ="blue";
// let color;

// if (mode === "dark"){
//     color="black";
// }else if (mode === "blue"){
//     color="blue";
// }else {
//     color="white";
// }

// console.log(color);



// let sum = 0;

// for(let i=1;i<=5;i++){
//     sum = sum+i;
// }

// console.log("sum =",sum);



// let i=0;

// for (let i=1;i<=8;i++){
//      console.log(i);
// }



// let  i=1;

// while(i<=5){
//     console.log("apeksha")
//     i++;
// }




// let i=20;

// do{
//     console.log("apeksha");
// }while(i<=10);
 


// let i=100;

// for (i=0;i<=100;i=i+2){   
//     console.log(i);
// }


// for (i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }



// let gamenumber=25;

// let usernumber=prompt("give me your number");

// while(usernumber!=gamenumber){
//     usernumber=prompt("you entered a  wrong number : enter again");
// }
// console.log("congratulation you enter a right number");


// let marks=[98,56,90,87,67,59,82,95]

// for (let i=0;i<marks.length;i++){
//     console.log(i); 
// }



// let cities=["mumbai","pune","nashik","delhi","bandra","hydrabad","banglor"]

// for (let city of cities){
//     console.log(city);
// }


// let marks=[87,78,98,67,56,95,45];

// let sum=0;

// for (let val of marks){
//     sum+=val;
// }
// // console.log(sum);
// function addToCart(product) {
//     alert(product + " added to cart!");
// }

// function submitForm(event) {
//     event.preventDefault();
//     alert("Message sent successfully!");
// }

// function scrollToProducts() {
//     document.getElementById("products").scrollIntoView();
// }

// function toggleMenu() {
//     let nav = document.getElementById("navLinks");
//     if (nav.style.display === "flex") {
//         nav.style.display = "none";
//     } else {
//         nav.style.display = "flex";
//     }
// }

// function scrollToProducts(){
// document.getElementById("products").scrollIntoView({behavior:"smooth"});
// }

// function toggleMode(){
// document.body.classList.toggle("dark");
// }


// window.addEventListener("scroll",()=>{
// let reveals=document.querySelectorAll(".reveal");
// reveals.forEach(el=>{
// let windowHeight=window.innerHeight;
// let elementTop=el.getBoundingClientRect().top;
// if(elementTop<windowHeight-100){
// el.classList.add("active");
// }
// });
// });
                                                                                                
function scrollToProducts(){
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function addToCart(product){
    alert(product + " added to cart!");
}
 // ===============================
// PRODUCT DATA
// ===============================

const products = [
    {
        id: 1,
        name: "Vitamin C Serum",
        price: 499,
        category: "serum",
        image: "https://images.unsplash.com/photo-1600180758895-6b94519a8ba5"
    },
    {
        id: 2,
        name: "Niacinamide Serum",
        price: 599,
        category: "serum",
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9e9b6c2"
    },
    {
        id: 3,
        name: "Sunscreen SPF 50",
        price: 399,
        category: "sunscreen",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07"
    }
];

// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    showToast(product.name + " added to cart");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ===============================
// RENDER PRODUCTS
// ===============================

function renderProducts(filter = "all") {
    const container = document.querySelector(".product-container");
    container.innerHTML = "";

    const filteredProducts = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// ===============================
// RENDER CART
// ===============================

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// ===============================
// TOAST NOTIFICATION
// ===============================

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}

// ===============================
// SMOOTH SCROLL
// ===============================

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
    renderCart();
});












