const sortButton = document.querySelectorAll(".sort-button");
for (let i = 0; i < sortButton.length; i++) {
  sortButton[i].addEventListener("click", () => {
    if (i == 0) {
      sortButton[0].classList.add("sort-button-click");
      sortButton[1].classList.remove("sort-button-click");
    } else {
      sortButton[1].classList.add("sort-button-click");
      sortButton[0].classList.remove("sort-button-click");
    }
  });
}
