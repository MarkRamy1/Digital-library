const submit = document.getElementById("submit");
const username = document.getElementById("name");
const question = document.getElementById("question");
const problem = document.getElementById("problem");
const input = document.getElementById("input");
const placeholder = "Type your problem or suggestion here...";
let letter = 0;
let firstClick = true

username.addEventListener("focus", function () {
    setTimeout(function showPlaceholder() {
        username.placeholder = "Your name";
    }, 350)
})

username.addEventListener("blur", function () {
    setTimeout(function hidePlaceholder() {
        username.placeholder = "";
    }, 150)
})

function submitName(name) {
    name = username.value;
    if (name) {
        question.innerHTML = `Hi ${name}, what a nice name!`;
        input.style.display = "none";
        problem.style.display = "flex";
        submit.style.top = "10px";
    } else if (name = null || name == "") {
        question.innerHTML = `Come one just say type your name...`
    }
}

function placeholderEffect() {
    problem.placeholder = placeholder.substring(0, letter);
    letter++;
    if (letter > placeholder.length) {
        letter = 0;
        placeholderTyping = setTimeout(placeholderEffect, 1000);
    } else {
        placeholderTyping = setTimeout(placeholderEffect, 75);
    }
}

function submitContact() {
    if (firstClick) {
        submitName()
        firstClick = false
    } else {
        clearTimeout(placeholderTyping);
        problem.value = "";
        problem.placeholder = "Thank you contact with us again!";
        setTimeout(function welcomea() {
            letter = 0;
            placeholderEffect();
        }, 1000)
    }
}

placeholderEffect()