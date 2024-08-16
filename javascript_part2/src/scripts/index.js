const themeButton = document.getElementById("theme-button");
const body = document.body;
const themeIcon = themeButton.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
  themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeButton.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});
