let shareContainer = document.getElementById("author-container");
let shareActive = document.getElementById("share-active");

function shareNavBar() {
    if (shareContainer.classList.contains("visible")) {
        shareContainer.classList.remove("visible");
        shareContainer.classList.add("hidden");
        shareActive.classList.remove("hidden");
        shareActive.classList.add("visible");
    } else {
        shareContainer.classList.remove("hidden");
        shareContainer.classList.add("visible");
        shareActive.classList.remove("visible");
        shareActive.classList.add("hidden");
    }
}

function showAuthor() {
    shareNavBar();
}

// function shareNavBar() {
//     if(shareContainer.style.display === "none") {
//         shareContainer.style.display = "flex";
//         shareActive.style.display = "none";
//     }else {
//         shareContainer.style.display = "none";
//         shareActive.style.display = "flex";
//     }
// }

// function showAuthor() {
//     if(shareActive.style.display === "none") {
//         shareActive.style.display = "block";
//         shareContainer.style.display = "none";
//     }else {
//         shareActive.style.display = "none";
//         shareContainer.style.display = "flex";
//     }
// }