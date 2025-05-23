// Global allBooks array
const allBooks = [
    { title: "Analog Electronics", pdf: "../../AnalogElectronics.pdf", genre: "curriculum", image: "frames/1.jpeg" },
    { title: "أخلاقيات الذكاء الاصطناعي", pdf: "../../أخلاقيات_الذكاء_الاصطناعي.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "أربعون 40 - أحمد الشقيري", pdf: "../../أربعون 40 - أحمد الشقيري - مكتبة شغف.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "أهم 50 كتاب في علم النفس", pdf: "../../أهم_50_كتاب_في_علم_النفس.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "البارون ساكن الأشجار - إيتالو كالفينو", pdf: "../../البارون ساكن الأشجار - رواية - إيتالو كالفينو - مكتبة شغف.pdf", genre: "fiction", image: "frames/1.jpeg" },
    { title: "الجبل الأسود", pdf: "../../الجبل_الأسود.pdf", genre: "adventure", image: "frames/1.jpeg" },
    { title: "الحكمة والذكاء والإبداعية - روبرت ستيرنبرج", pdf: "../../الحكمة والذكاء والإبداعية - كتاب - روبرت ستيرنبرج - مكتبة شغف (1).pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "الرحالة - شارون كريتش", pdf: "../../الرحالة - رواية - شارون كريتش - مكتبة شغف.pdf", genre: "adventure", image: "frames/1.jpeg" },
    { title: "الرهائن الثلاث - جون بوكان", pdf: "../../الرهائن الثلاث - رواية - جون بوكان - مكتبة شغف.pdf", genre: "thriller", image: "frames/1.jpeg" },
    { title: "السيف الأزرق - روبين مكينلي", pdf: "../../السيف الأزرق - رواية - روبين مكينلي - مكتبة شغف.pdf", genre: "fiction", image: "frames/1.jpeg" },
    { title: "المجتمع السليم - إريك فروم", pdf: "../../المجتمع السليم - إريك فروم - مكتبة شغف.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "المعبد الذهبي - يوكيو ميشيما", pdf: "../../المعبد الذهبي - رواية - يوكيو ميشيما - مكتبة شغف.pdf", genre: "fiction", image: "frames/1.jpeg" },
    { title: "تطور الفكر العربي الحديث - رؤوف عباس", pdf: "../../تطور الفكر العربي الحديث - رؤوف عباس - مكتبة شغف.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "رجال مُلهَمون - أندري بلاتونوف", pdf: "../../رجال مُلهَمون - رواية - أندري بلاتونوف - مكتبة شغف.pdf", genre: "fiction", image: "frames/1.jpeg" },
    { title: "كتاب الوحش الذي يسكنك يمكن أن يكون لطيفا - إيناس سمير", pdf: "../../كتاب الوحش الذي يسكنك يمكن أن يكون لطيفا PDF - إيناس سمير.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "كلنا إخوة", pdf: "../../كلنا_إخوة.pdf", genre: "philosophical", image: "frames/1.jpeg" },
    { title: "نفوس متقلبة - روبرت بار", pdf: "../../نفوس متقلبة - رواية - روبرت بار - مكتبة شغف.pdf", genre: "mystery", image: "frames/1.jpeg" }
];

const textarea = document.getElementById("textarea");
const placeholder = "Your feedback...";
// const Submit = document.getElementById("submit"); // Submit variable is declared but not used in JS.
let letter = 0;
let placeholderTyping;

function placeholderEffect() {
    if (textarea) {
        // Ensure placeholderTyping is cleared before setting a new timeout
        if (placeholderTyping) clearTimeout(placeholderTyping);
        textarea.placeholder = placeholder.substring(0, letter);
        letter++;
        if (letter > placeholder.length) {
            letter = 0;
            placeholderTyping = setTimeout(placeholderEffect, 1000);
        } else {
            placeholderTyping = setTimeout(placeholderEffect, 150);
        }
    }
}

// This function is called by the onclick attribute in the HTML button
// eslint-disable-next-line no-unused-vars
function submit() {
    if (placeholderTyping) clearTimeout(placeholderTyping);
    if (textarea) {
        textarea.value = "";
        textarea.placeholder = "Thank you for your feedback!";
    }
}

if (document.getElementById("textarea")) {
    placeholderEffect();
}

function showPage(pageId) {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("books-page").style.display = "none";
    document.getElementById("feedback-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";

    const existingGenreContent = document.getElementById("genre-content");
    if (existingGenreContent) {
        existingGenreContent.remove(); // Remove genre content when switching to a main page
    }

    document.getElementById(pageId).style.display = "block";

    if (pageId === "feedback-page" && document.getElementById("textarea")) {
        letter = 0; // Reset letter for placeholder
        if (placeholderTyping) clearTimeout(placeholderTyping); // Clear existing timeout
        placeholderEffect();
    }
}

function showGenre(genre) {
    // Hide all main pages first
    document.getElementById("home-page").style.display = "none";
    document.getElementById("books-page").style.display = "none";
    document.getElementById("feedback-page").style.display = "none";
    document.getElementById("contact-page").style.display = "none";

    // Remove any existing genre content to prevent duplication if showGenre is called multiple times
    const existingGenreContent = document.getElementById("genre-content");
    if (existingGenreContent) {
        existingGenreContent.remove();
    }

    let genreContent = document.createElement('div');
    genreContent.id = "genre-content"; // Assign an ID for easy removal
    genreContent.style.padding = "20px";
    genreContent.style.margin = "20px";
    genreContent.style.backgroundColor = "#D7D0C8";
    genreContent.style.border = "3px solid #95A78D";
    genreContent.style.borderRadius = "15px";

    let backButton = document.createElement('button');
    backButton.textContent = "Back to Books";
    backButton.style.padding = "10px 20px";
    backButton.style.margin = "20px 0";
    backButton.style.backgroundColor = "#95A78D";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    backButton.style.fontSize = "18px";
    backButton.onclick = function() {
        genreContent.remove(); // Remove the current genre page
        showPage("books-page"); // Go back to the main books page
    };

    let pageTitleElement = document.createElement('h1'); // Renamed to avoid conflict with book.title
    pageTitleElement.textContent = genre.charAt(0).toUpperCase() + genre.slice(1) + " Books";
    pageTitleElement.style.textAlign = "center";

    let booksContainer = document.createElement('div');
    booksContainer.style.display = "flex";
    booksContainer.style.flexWrap = "wrap";
    booksContainer.style.justifyContent = "space-around";
    booksContainer.style.marginTop = "30px";
    booksContainer.innerHTML = ''; // Clear previous book listings for this container

    const filteredBooks = allBooks.filter(book => book.genre === genre);

    if (filteredBooks.length === 0) {
        const noBooksMessage = document.createElement('p');
        noBooksMessage.textContent = "No books available in this genre yet. Check back later!";
        noBooksMessage.style.textAlign = "center";
        noBooksMessage.style.width = "100%"; // Ensure message takes full width
        booksContainer.appendChild(noBooksMessage);
    } else {
        filteredBooks.forEach(book => {
            const bookLink = document.createElement('a');
            bookLink.href = book.pdf;
            bookLink.target = "_blank"; // Open PDF in a new tab
            bookLink.style.margin = "15px";
            bookLink.style.textAlign = "center";
            bookLink.style.textDecoration = "none"; // Remove underline from link
            bookLink.style.color = "inherit"; // Use default text color

            const img = document.createElement('img');
            img.src = book.image; // Path relative to index.html (e.g., "frames/1.jpeg")
            img.alt = book.title;
            img.style.width = "150px";
            img.style.height = "auto"; // Adjust as needed, e.g., "220px" for uniform height
            img.style.border = "#090809 1px solid";
            img.style.borderRadius = "5px";
            img.style.boxShadow = "#090809 0 0 15px 0px";

            const bookTitleElement = document.createElement('h3'); // Renamed to avoid conflict
            bookTitleElement.textContent = book.title;
            bookTitleElement.style.marginTop = "10px";
            bookTitleElement.style.width = "150px"; // Match image width
            bookTitleElement.style.overflowWrap = "break-word"; // Wrap long titles

            bookLink.appendChild(img);
            bookLink.appendChild(bookTitleElement);
            booksContainer.appendChild(bookLink);
        });
    }

    genreContent.appendChild(backButton);
    genreContent.appendChild(pageTitleElement);
    genreContent.appendChild(booksContainer);

    // Append the newly created genre page to the body
    document.body.appendChild(genreContent);
}

// Show home page by default
document.addEventListener("DOMContentLoaded", function() {
    showPage("home-page");
});
