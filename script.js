
// typewriter-text logic
const texts = ["Hi, I'm Rishabh Singhal ", "Your Web Developer", "Frontend Specialist with expertise in Angular", "Building Scalable Web Applications", "Crafting Seamless User Experiences"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// typewriter function

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typewriter-text").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 200); // wait before next word
    }, 1500); // wait after full word typed
  } else {
    setTimeout(type, 80);
  }
})();

