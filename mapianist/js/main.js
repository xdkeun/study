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

const artistDetail = document.querySelectorAll(".artist-detail");
const artistMoreButton = document.querySelector(".artist-more-button");
const artistMoreButtonOnClick = () => {
  if (artistMoreButton.textContent == "인기 아티스트 더보기") {
    artistMoreButton.textContent = "인기 아티스트 접기";
  } else if (artistMoreButton.textContent == "인기 아티스트 접기") {
    artistMoreButton.textContent = "인기 아티스트 더보기";
  }
  for (let i = 6; i < artistDetail.length; i++) {
    artistDetail[i].classList.toggle("hidden");
  }
};
artistMoreButton.addEventListener("click", artistMoreButtonOnClick);
