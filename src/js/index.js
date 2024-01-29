const btn = document.querySelector(".platform-btn");
const platformElements = document.querySelector(".platform-btn .Platforms");

btn.addEventListener("click", () => {
  platformElements.classList.toggle("active")
});

