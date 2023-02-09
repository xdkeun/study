// nav-list가 클릭되면 nav의 배경이 바뀐다.

const navBackground = document.querySelector(".nav-background");
const navList = document.querySelectorAll(".nav-list");
const colors = ["red", "blue", "yellow", "orange"];

// navList 클릭 시 해당 index로 navBackground를 변경한다
for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", () => {
    navBackground.style.backgroundColor = colors[i];
    for (let j = 0; j < navList.length; j++) {
      if (i == j) {
        navList[j].style.backgroundColor = "tomato";
      } else {
        navList[j].style.backgroundColor = "white";
      }
    }
  });
}