const textarea =  document.getElementById("textarea");
const placeholder = "Your feedback...";
const Submit = document.getElementById("submit")
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

function submit() {
    clearTimeout(placeholderTyping);
    textarea.value = "";
    textarea.placeholder = "Thank you for your feedback!";
}

placeholderEffect()

function home() {
    window.location = "../index.html"
}

function books() {
    window.location = "../Html/books.html"
}

function feedback() {
    window.location = "../Html/feedback.html"
}

function contact() {
    window.location = "../Html/contact.html"
}

function curriculum() {
    window.location = "Curriculum/curriculum.html"
}

function horror() {
    window.location = "Horror/horror.html"
}

function romantic() {
    window.location = "Romantic/romantic.html"
}

function comic() {
    window.location = "Comic/comic.html"
}

function adventure() {
    window.location = "Adventure/adventure.html"
}

function mystery() {
    window.location = "Mystery/mystery.html"
}

function thriller() {
    window.location = "Thriller/thriller.html"
}

function fiction() {
    window.location = "Fiction/fiction.html"
}

function philosophical() {
    window.location = "Philosophical/philosophical.html"
}