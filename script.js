let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
//let account = document.getElementById("account");
let submit = document.getElementById("submit");
console.log("submit");





document.getElementById("submit").addEventListener("click", function (e) {




  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(data);
  let log = document.getElementById("log");
//   console.log("name:", name.value);
//  console.log("email:", email.value);
//   console.log("Password:", password.value);
localStorage.setItem("data", JSON.stringify(data));
log.style.display = "block";
});





let log = document.getElementById("log");
let loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener("click", e =>{
  e.preventDefault();
log.style.display = "block";



})

let close = document.getElementById("close");
close.addEventListener("click", e =>{
  log.style.display = "none";
} )

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let btn = document.getElementById("btn");
 console.log(btn);

 document.getElementById("btn").addEventListener("click", function(e){
  const obj = {
    email: loginEmail.value,
    loginPassword: loginPassword.value,
  };

 let storedData1 = localStorage.getItem("data");
 let storedData = JSON.parse(storedData1);

if (obj.email === storedData.email && obj.loginPassword === storedData.password) {
  console.log('thank you!');
  let log = document.getElementById("log");
  log.style.display = "none";
  open("/dashbord.html");
}

 console.log("login data:", obj);
  console.log("local storage :", storedData);
  

 });


 
