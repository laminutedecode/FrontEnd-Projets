const allBtn = document.querySelectorAll(".burger");

allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hello");

    btn.classList.toggle("active");
  });
});
