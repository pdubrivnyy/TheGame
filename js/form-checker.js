document.addEventListener("DOMContentLoaded", function () {
  // Общая логика проверки формы
  function setupFormChecker(formSelector, correctPhrases, redirectUrl) {
    const formWrapper = document.querySelector(formSelector);
    if (!formWrapper) return; // если форма не найдена, выходим

    const form = formWrapper.querySelector("form");
    const input = form.querySelector("#name");
    const successMessage = formWrapper.querySelector(".w-form-done");
    const errorMessage = formWrapper.querySelector(".w-form-fail");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const userInput = input.value.trim().toUpperCase();
      const isCorrect = correctPhrases.some(
        (phrase) => phrase.toUpperCase() === userInput
      );

      if (isCorrect) {
        errorMessage.classList.add("hidden");
        successMessage.style.display = "block";

        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 2000);
      } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.classList.remove("hidden");

        setTimeout(() => {
          errorMessage.classList.add("hidden");
        }, 1500);
      }
    });
  }

  // Настройки для каждой формы
  setupFormChecker(".form_caesar", ["ORESHKI V SHOKOLADE"], "listener.html");
  setupFormChecker(".form_listener", ["PIPIZZA"], "location.html");
  setupFormChecker(".form_location", ["камушек", "kamushek"], "final.html");
});
