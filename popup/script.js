const watchNowTag = document.querySelector(".main-container button");
const trailerContainerTag = document.querySelector(".trailer-container");
const closeTag = document.querySelector(".trailer-container span");

watchNowTag.addEventListener("click", (e) => {
  trailerContainerTag.classList.remove("active");
});

closeTag.addEventListener("click", (e) => {
  trailerContainerTag.classList.add("active");
});
