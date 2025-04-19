const textarea =  document.getElementById("textarea");
const placeholder = "Your feedback...";
let letter = 0;

function placeholderEffect() {
    textarea.placeholder = placeholder.substring(0, letter);
    letter++;
    if (letter > placeholder.length) {
        letter = 0;
        placeholderTyping = setTimeout(placeholderEffect, 1000);
    } else {
        placeholderTyping = setTimeout(placeholderEffect, 150);
    }
}

function submitFeedback() {
    clearTimeout(placeholderTyping);
    textarea.value = "";
    textarea.placeholder = "Thank you for your feedback!";
    setTimeout(function thanks() {
        letter = 0;
        placeholderEffect();
    }, 2000)
}

placeholderEffect()