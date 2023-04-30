const inputTag = document.querySelector(".input");
const bodyTag = document.querySelector("body");

inputTag.checked = JSON.parse(localStorage.getItem("mode"));
changeTheme();

function changeTheme() {
  if (inputTag.checked) {
    bodyTag.style.backgroundColor = "black";
  } else {
    bodyTag.style.backgroundColor = "white";
  }
}

function setLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputTag.checked));
}

inputTag.addEventListener("click", () => {
  changeTheme();
  setLocalStorage();
});
