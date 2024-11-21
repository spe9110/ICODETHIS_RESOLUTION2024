// utility - prevent link clicks (only if #)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        if (link.getAttribute("href") === "#") {
            e.preventDefault();
        }
    });
});
