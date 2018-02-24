(function() {
  const dropdowns = document.querySelectorAll(".dropdown__toggle");
  dropdowns.forEach(button => {
    button.addEventListener("click", () => {
      button.parentNode.classList.toggle("is-open");
    });
  });
})();
