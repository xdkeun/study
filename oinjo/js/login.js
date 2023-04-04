const del = document.querySelector(".delete");
const inputText = document.querySelector("#input-text"); 

function testFunction() {
  inputText.value = "";
}
del.addEventListener("click", testFunction); 
// delete X

const loginText = document.querySelector(".login-text");
const idInput = document.querySelector(".id-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-button");
const saveButton = document.querySelector(".save-button");
const idButton = document.querySelector(".id-button");
const pwButton = document.querySelector(".pw-button");
const selectBar = document.querySelector(".select-bar");
selectBar.addEventListener("change", function (e) {
  console.log(e.target.value);
  if (e.target.value == "ko") {
    loginText.textContent = "로그인";
    idInput.placeholder = "아이디";
    passwordInput.placeholder = "비밀번호";
    loginButton.value = "로그인";
    saveButton.textContent = "회원가입";
    idButton.textContent = "아이디 찾기";
    pwButton.textContent = "비밀번호 찾기";
  }
  if (e.target.value == "en") {
    loginText.textContent = "Login";
    idInput.placeholder = "ID";
    passwordInput.placeholder = "Password";
    loginButton.value = "Login";
    saveButton.textContent = "Sign Up";
    idButton.textContent = "Find ID";
    pwButton.textContent = "Find Password";
  }
})
// 번역

