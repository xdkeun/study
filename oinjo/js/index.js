// 카테고리에서 후드 티셔츠를 클릭 시 상품 부분 맨 위에 후드 티셔츠로 표시되도록 하는 소스
const selectName = document.querySelectorAll(".select-name");
const nowCategory = document.querySelector(".now-category");
const selectNameClickEvent = (event) => {
  nowCategory.innerText = event.target.innerText;
};
for (let i = 0; i < selectName.length; i++) {
  selectName[i].addEventListener("click", selectNameClickEvent);
}

const $topBtn = document.querySelector(".move-top-btn");
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const $bottomBtn = document.querySelector(".move-bottom-btn");
$bottomBtn.onclick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
