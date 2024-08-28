let shareContainer = document.getElementById("author-container");
let shareActive = document.getElementById("share-active");
function shareNavBar() {
    if(shareContainer.style.display === "none") {
        shareContainer.style.display = "block";
        shareActive.style.display = "none";
    }else {
        shareContainer.style.display = "none";
        shareActive.style.display = "block";
    }
}

function showAuthor() {
    // let shareActive = document.getElementById("share-active");
    if(shareActive.style.display === "none") {
        shareActive.style.display = "block";
        shareContainer.style.display = "none";
    }else {
        shareActive.style.display = "none";
        shareContainer.style.display = "flex";
    }
}