var userName = document.getElementById("username");
var userEmail = document.getElementById("Email");
var userpassword = document.getElementById("userpassword");
var btnOne = document.getElementById("btnOne");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("Logout");
var btnFour = document.getElementById("btnFour");
var haveacc = document.getElementById("haveacc");
var donthave = document.getElementById("donthave");
var emailsignUP = document.getElementById("usermail-signup");
var password = document.getElementById("password-signup");
var newUser = [];
var username = localStorage.getItem("sessionUsername");

var myrow = document.getElementById("myrow");
btnOne.addEventListener("click", login);
btnTwo.addEventListener("click", signUP);
btnThree.addEventListener("click", Logout);
btnFour.addEventListener("click", adduser);
function login() {
  document.getElementById("d-one").classList.replace("d-none", "d-block");
  document.getElementById("d-two").classList.replace("d-block", "d-none");

  if (searchExistEmailPassword()) {
    var name = searchExistEmailPassword();
    myrow.innerHtml = `hello` + $;
    {
      name;
    }
  } else {
  }
}

function signUP() {
  document.getElementById("username").classList.replace("d-none", "d-block");
  document
    .getElementById("usermail-signup")
    .classList.replace("d-none", "d-block");
  document
    .getElementById("password-signup")
    .classList.replace("d-none", "d-block");

  document.getElementById("Email").classList.replace("d-block", "d-none");
  document
    .getElementById("userpassword")
    .classList.replace("d-block", "d-none");
  document.getElementById("btnOne").classList.replace("d-block", "d-none");
  document.getElementById("btnFour").classList.replace("d-none", "d-block");
  document.getElementById("haveacc").classList.replace("d-none", "d-block");
  document.getElementById("donthave").classList.replace("d-block", "d-none");
  
}
function Logout() {
  document.getElementById("d-one").classList.replace("d-block", "d-none");
  document.getElementById("d-two").classList.replace("d-none", "d-block");
}
function adduser() {
  var user = {
    userName: userName.value,
    userEmail: emailsignUP.value,
    userpassword: password.value,
  };
  if (searchExistEmail);
  else {
    // error
    newUser.push(user);
    localStorage.setItem("Users", JSON.stringify(newUser));
  }
}

function searchExistEmail() {
  var word = userEmail.value;
  for (var i = 0; i < newUser.length; i++) {
    if (newUser[i].userEmail.tolowerCase() == word.tolowerCase()) return true;
  }
  return false;
}
function searchExistEmailPassword() {
  var word = userEmail.value;
  var pass = password.value;
  for (var i = 0; i < newUser.length; i++) {
    if (
      newUser[i].userEmail.tolowerCase() == word.tolowerCase() &&
      newUser[i].userpassword.tolowerCase() == pass.tolowerCase()
    )
      return newUser[i].userName;
  }
  return false;
}
