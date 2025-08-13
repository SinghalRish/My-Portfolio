// initializing aos
AOS.init();

// typewriter-text logic
const texts = [
  "Hi, I'm Rishabh Singhal ",
  "Your Web Developer",
  "Frontend Specialist with expertise in Angular",
  "Building Scalable Web Applications",
  "Crafting Seamless User Experiences",
];
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


const botReplies = {
  "hi": "Hello! I'm RishBot, here to tell you about Rishabh.",
  "who are you": "I'm Rishabh's portfolio assistant!",
  "projects": "I have worked on TastyBurger Delivery, Tomato App, and more!",
  "skills": "HTML, CSS, JavaScript, React, Angular, Node.js, and more!",
  "contact": "You can reach Rishabh at rishabhsinghal061@gmail.com"
};


// chat bot functionality can be added later make changes accorddingly 
// function sendMessage() {
//   const input = document.getElementById("user-input");
//   const message = input.value.toLowerCase();
  
//   addMessage("You", message, "user");
  
//   let reply = "Sorry, I don't understand. Try asking about 'projects', 'skills', or 'contact'.";
//   for (let key in botReplies) {
//     if (message.includes(key)) {
//       reply = botReplies[key];
//       break;
//     }
//   }
  
//   addMessage("Bot", reply, "bot");
//   input.value = "";
// }

// function addMessage(sender, text, className) {
//   const messages = document.getElementById("messages");
//   messages.innerHTML += `<div class="${className}"><strong>${sender}:</strong> ${text}</div>`;
//   messages.scrollTop = messages.scrollHeight;
// }
