const navBackground = document.querySelector(".nav-background");
const navList = document.querySelectorAll(".nav-list");
const colors = ["#fab1a0", "#ffeaa7", "#a29bfe", "#dfe6e9"];

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
