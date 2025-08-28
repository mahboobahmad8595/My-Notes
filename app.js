//! Letter Animation

const textArray = ["Library", "Books", "Notes", "Articles"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
 const currentText = textArray[textIndex];

if (!isDeleting) {
 typingElement.textContent = currentText.substring(0, charIndex + 1);
 charIndex++;

if (charIndex === currentText.length) {
 isDeleting = true;
 setTimeout(typeEffect, 1500);
          return;
        }
} else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
        }
      }

      const speed = isDeleting ? 100 : 150; 
      setTimeout(typeEffect, speed);
}

typeEffect();
