"use strict";
addEventListener("DOMContentLoaded", () => {
    //// thumbnail hack
    if (navigator.userAgent.includes("Headless")) {
        document.documentElement.style.setProperty("--speed-fast", "0s");
        document.documentElement.style.setProperty("--speed-medium", "0s");
        document.documentElement.style.setProperty("--speed-slow", "0s");
        document.body.style.setProperty("padding-block-end", "0");
        document.body.style.setProperty("margin-block-start", "152px");
        document.body.style.setProperty("min-block-size", "0");
        document.body.style.setProperty("block-size", "calc(100vh - 304px)");
        document.body.style.setProperty("position", "relative");
        //const workInProgress = `<span style="position: absolute; inset-inline: 0; inset-block-end: 0; inline-size: 100%; color: #fff; font-size: 3rem; font-weight: bold; text-align: center; padding: 0.5rem; background-image: repeating-linear-gradient(-45deg, #fb1, #fb1 2rem, #000 2rem, #000 4rem);text-shadow: 0 0 0.5rem #000, 0 0 0.5rem #000, 0 0 0.5rem #000;">Work in progress…<span>`;
        //document.body.insertAdjacentHTML("beforeend", workInProgress);
    }

    //// closing
    // closing dialog
    document.querySelectorAll("dialog").forEach((dialog) => {
        // close .hiding dialog after animation ends
        dialog.addEventListener("animationend", (event) => {
            if (event.target.classList.contains("hiding")) {
                event.target.close();
                event.target.classList.remove("hiding");
            }
        });
        // add .hiding class when clicked on modal backdrop
        dialog.addEventListener("click", (event) => {
            const dialog = event.target.closest("dialog");
            const rect = dialog.getBoundingClientRect();
            const isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
            if (!isInDialog && event.target.tagName === "DIALOG") {
                dialog.classList.add("hiding");
            }
        });
    });
    // closing .hideable
    document.querySelectorAll(".hideable").forEach((element) => {
        // close .hiding after animation ends
        element.addEventListener("animationend", (event) => {
            if (event.target.classList.contains("hiding")) {
                event.target.hidden = true;
                event.target.classList.remove("hiding");
            }
        });
    });
    /// close buttons
    document.querySelectorAll(".close-button").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            event.currentTarget.blur();
            event.currentTarget.closest("dialog, .hideable").classList.add("hiding");
        });
    });

    //// settings
    /// open settings modal
    const settingsOpenButtonHTML = `
	  <button class="settings-open-button">
		  <svg class="icon" width="24" height="24" aria-hidden="true"><use href="#icon-adjustments" /></svg>
			<span>settings</span>
		</button>`;
    document.body.insertAdjacentHTML("beforeend", settingsOpenButtonHTML);
    document.querySelectorAll(".settings-open-button").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelector("#settings-modal").showModal();
        });
    });

    /// dark mode
    const settingsDarkmodeDOM = document.querySelector("#settings-darkmode");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        settingsDarkmodeDOM.checked = true;
        document.documentElement.setAttribute("data-theme", "dark");
    } else if (document.documentElement.getAttribute("data-theme") === "dark") settingsDarkmodeDOM.checked = true;
    else settingsDarkmodeDOM.checked = false;

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
        settingsDarkmodeDOM.checked = event.matches;
        if (settingsDarkmodeDOM.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    });

    settingsDarkmodeDOM.addEventListener("change", () => {
        if (settingsDarkmodeDOM.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    });

    /// accent color
    const settingsHueDOM = document.querySelector("#settings-hue");
    settingsHueDOM.value = getComputedStyle(document.documentElement).getPropertyValue("--h");
    settingsHueDOM.addEventListener("input", () => {
        document.documentElement.style.setProperty("--h", settingsHueDOM.value);
    });
    document.documentElement.setAttribute("data-content-loaded", "true");
});
