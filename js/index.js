const correctPasscode = "04232004";
let input = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".key");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (input.length < 8) {
      input += value;
      display.textContent = "*".repeat(input.length);
    }

    if (input.length === 8) {
      setTimeout(() => {
        if (input === correctPasscode) {
          display.textContent = "Access Granted!";
          setTimeout(() => window.location.href = "home.html", 1000);
        } else {
          display.textContent = "Incorrect. Try Again.";
          input = "";
        }
      }, 500);
    }
  });
});
