function home() {
    window.location = "../../../index.html"
}

function books() {
    window.location = "../../../Html/books.html"
}

function feedback() {
    window.location = "../../../Html/feedback.html"
}

function contact() {
    window.location = "../../../Html/contact.html";
}

document.addEventListener("DOMContentLoaded", function () {
    function loadBookImages(sectionClass, totalPages, prefix) {
        const container = document.querySelector(`section.${sectionClass}`);
    if (!container) return;

    for (let i = 1; i <= totalPages; i++) {
        const num = String(i).padStart(4, '0');
        const img = document.createElement("img");
        img.src = `${prefix}${num}.jpg`;
        img.alt = `Page ${i}`;
        container.appendChild(img);
    }
}

// كتاب الرحالة
loadBookImages(
    "elrahala",
    280,
    "../../../PDFs/الرحالة - رواية - شارون كريتش - مكتبة شغف/الرحالة - رواية - شارون كريتش - مكتبة شغف_pages-to-jpg-"
);

//كتاب السيف الأزرق
loadBookImages(
    "elseif-elazrak",
    282,
    "../../../PDFs/السيف الأزرق - رواية - روبين مكينلي - مكتبة شغف/السيف الأزرق - رواية - روبين مكينلي - مكتبة شغف_page-"
);

// كتاب المعبد الذهبي
loadBookImages(
    "elmaabad-elzahabi",
    228,
    "../../../PDFs/المعبد الذهبي - رواية - يوكيو ميشيما - مكتبة شغف/المعبد الذهبي - رواية - يوكيو ميشيما - مكتبة شغف_page-"
);
});
