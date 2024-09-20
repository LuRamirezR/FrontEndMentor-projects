let shareContainer = document.getElementById("author-container");
let shareActive = document.getElementById("share-active");

function shareNavBar() {
    if ( window.innerWidth >= 1024 ) {
        shareActive.classList.toggle("hidden");
        shareActive.classList.toggle("visible");
    } else {
        shareContainer.classList.toggle("visible");
        shareContainer.classList.toggle("hidden");
        shareActive.classList.toggle("hidden");
        shareActive.classList.toggle("visible");
    }
}

function showAuthor() {
    shareNavBar();
}