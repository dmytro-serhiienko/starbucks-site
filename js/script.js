// Функциональность для кнопки "наверх"
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.querySelector(".footer-scroll-top");

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
