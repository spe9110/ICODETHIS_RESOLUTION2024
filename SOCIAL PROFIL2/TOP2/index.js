"use strict"
console.clear()
addEventListener("DOMContentLoaded", () => {

    // Marcin Małecki's thumbnail hack
    if (navigator.userAgent.includes("Headless")) {
        document.body.style.setProperty("padding-block-end", "0");
        document.body.style.setProperty("margin-block-start", "152px");
        document.body.style.setProperty("min-block-size", "0");
        document.body.style.setProperty("block-size", "calc(100vh - 304px)");
        document.body.style.setProperty("position", "relative");
    }

    const followBtn = document.getElementById('follow-btn')

    followBtn.addEventListener('click', () => {
        followBtn.classList.toggle('following')
        if (followBtn.classList.contains('following')) {
            followBtn.innerText = "Following"
        } else {
            followBtn.innerText = "+ Follow"
        }
    })



})  // Marcin's hack end
