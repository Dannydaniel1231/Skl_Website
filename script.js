let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
//let account = document.getElementById("account");
let submit = document.getElementById("submit");
console.log("submit");



document.getElementById("submit").addEventListener("click", function (e) {


  if (!name.value || !email.value || !password.value) {
    alert("Please fill in all fields.");
    return;
  }


  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(data);
//   console.log("name:", name.value);
//  console.log("email:", email.value);
//   console.log("Password:", password.value);
});

localStorage.setItem("data",JSON.stringify(data));
let storedData = localStorage.getItem("data");
console.log(storedData);