//switcing between login and register
const wrapper = document.querySelector(".wrapper");
const login = document.querySelector(".login-link");
const Register = document.querySelector(".register-link");

Register.addEventListener("click", () => {
  wrapper.classList.add("active");
});
login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
//_____________________________________________
function setlocalstorage() {
    const form = document.getElementById("register-form");
    const name = document.getElementById("name1").value;
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
  //    sotarage data using localstorage
  //     and alert welcome massege in register
  localStorage.setItem("email", email);
  localStorage.setItem("pasword", password);
  localStorage.setItem("username", name);
  // localStorage.clear();
  var welcomeMessage = "Welcome! " + "  " + name;
  alert(welcomeMessage);
}
function welcomeback() {
  alert("Welcome back!");
}