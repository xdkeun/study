const first = document.querySelector("#first-form");
const second = document.querySelector("#second-form");
const third = document.querySelector("#third-form");
const fourth = document.querySelector("#fourth-form");
// document.querySelector(".first-page-move-btn").style.opacity = "1";
// 두번째 페이지만 보이기
function begin() {
  const name = document.querySelector("#user-name");
  const nickname = document.querySelector("#user-nickname");
  if (name.value.length > 0 && nickname.value.length > 0) {
    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
    fourth.style.display = "none";
  }
}
//

// 세번째 페이지만 보이기
function second_third() {
  const phone = document.querySelector("#user-phone");
  const address = document.querySelector("#user-address");
  if (phone.value.length > 0 && address.value.length > 0) {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
    fourth.style.display = "none";
  }
}
//



/////////////// 가입 버튼이 안눌림 ////////////////
// 네번째 페이지만 보이기
function third_fourth() {
  const email = document.querySelector("#user-email");
  const certification = document.querySelector("#user-certification");
  if (email.value.length > 0 && certification.value.length > 0) {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
  }
}
//



// 첫번째 페이지로 돌아가기
function first_page() {
  first.style.display = "block";
  second.style.display = "none";
  third.style.display = "none";
  fourth.style.display = "none";
}
//

// 두번째 페이지로 돌아가기
function second_page() {
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  fourth.style.display = "none";
}
//

// 세번째 페이지로 돌아가기
function third_page() {
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
  fourth.style.display = "none";
}
//





///////// 가입 버튼 비활성화 -> 활성화로 바꿔야 함
///////// 안넘어가게 만들고 싶은데 그걸 모르겠고, 지금 상태는 틀리면 
///////// 문장 뜨고 확인 누르면 넘어감
function send() {
  const password = document.querySelector("#user-password");
  const repassword = document.querySelector("#user-password2");
  const savebtn = document.querySelector(".save-button");
  if(password.value != repassword.value) {
    alert("비밀번호를 확인해주세요");
  }
}
///////////////////////





// 비밀번호 일치 불일치
function check_password() {
  if (
    document.getElementById("user-password").value != "" &&
    document.getElementById("user-password2").value != ""
  ) {
    if (
      document.getElementById("user-password").value ==
      document.getElementById("user-password2").value
    ) {
      document.getElementById("check").innerHTML = "일치";
      document.getElementById("check").style.color = "blue";
    } else {
      document.getElementById("check").innerHTML = "불일치";
      document.getElementById("check").style.color = "red";
    }
  }
  if (
    document.getElementById("user-password").value == "" ||
    document.getElementById("user-password2").value == ""
  ) {
    document.getElementById("check").innerHTML = "";
  }
}
//
document
  .querySelector(".password-input")
  .addEventListener("change", check_password);
document
  .querySelector(".re-password-input")
  .addEventListener("change", check_password);

// 지우기
const passwordClear = document.querySelector(".password-clear");
const userPassword = document.querySelector("#user-password");

function passwordClearFunction() {
  userPassword.value = "";
}
passwordClear.addEventListener("click", passwordClearFunction);
//

// 비밀번호 숫자만 입력
function checkNumber(event) {
  if (
    event.key === "." ||
    event.key === "-" ||
    (event.key >= 0 && event.key <= 9)
  ) {
    return true;
  }

  return false;
}
//
