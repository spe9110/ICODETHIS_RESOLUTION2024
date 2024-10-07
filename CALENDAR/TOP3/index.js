// Write your JavaScript code here

console.clear();

const previousButton = document.querySelector("#previousMonth");
const nextButton = document.querySelector("#nextMonth");
const monthDisplay = document.querySelector("#monthDisplay");
const yearDisplay = document.querySelector("#yearDisplay");
const dateList = document.querySelector("#calendarDays");
const eventButton = document.querySelector("#event-button");
const backdrop = document.querySelector("#backdrop");
const details = document.querySelector("#details");

const weekdayDisplay = document.querySelector("#weekday-display");
const dayDisplay = document.querySelector("#day-display");

let backdropActive = false;
let selectedDay = null;

backdrop.addEventListener("click", e => {
    if (backdropActive) {
        backdrop.classList.add("inactive");
        details.classList.add("inactive");
        backdropActive = false;
    }
})

const eventColors = [
    "#33bf21",
    "#bc21bf",
    "#b8811a"
]

const events = {
    "Sep-26-2024": ["First Event", "Second Event"],
    "Sep-30-2024": ["Example Event"]
}

const MONTHS = [
    "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"
]
const WEEKDAYS = [
    "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
]

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDate = today.getDate();

renderCalender(currentYear, currentMonth); 
weekdayDisplay.textContent = WEEKDAYS[today.getDay()];
dayDisplay.textContent = currentDate + ". " + MONTHS[currentMonth % 12];


previousButton.addEventListener("click", e => {
    currentMonth--;
    renderCalender(currentYear, currentMonth)
});

nextButton.addEventListener("click", e => {
    currentMonth++;
    renderCalender(currentYear, currentMonth)
});

eventButton.addEventListener("click", e => {
    if (selectedDay === null) return alert("Please choose a date");
    const shortMonth = MONTHS[currentMonth % 12].slice(0, 3);
    console.log(selectedDay);
    details.querySelector("#detailsDay").textContent = selectedDay.day;
    details.querySelector("#detailsMonth").textContent = shortMonth;
    backdrop.classList.remove("inactive");
    details.classList.remove("inactive");
    backdropActive = true;
})

function renderCalender(year, month) {
    dateList.innerHTML = "";
    const calendarDays = getCalendarDays(year, month);
    const chosenDate = new Date(year, month, 1);
    const monatText = MONTHS[chosenDate.getMonth()];

    monthDisplay.textContent = monatText;
    yearDisplay.textContent = chosenDate.getFullYear();

    calendarDays.forEach((cd, idx) => {
        
        const p = document.createElement("p");
        const key = `${MONTHS[currentMonth % 12].slice(0, 3)}-${cd.day}-${currentYear}`;
        p.textContent = cd.day
        if (events[key] !== undefined) {
            console.log(key);
            const eventsContainer = document.createElement("div");
            eventsContainer.classList.add("event-container");
            events[key].forEach((ev, i) => {
                if (i > 2) return;
                const eventDot = document.createElement("div");
                eventDot.style.setProperty("--dot-color", eventColors[i]);
                eventDot.classList.add("event-dot");
                eventsContainer.appendChild(eventDot);        
            })
            p.appendChild(eventsContainer);
        }
        
        p.classList.add(cd.type);
        p.style.setProperty("--fade-delay", `${idx * 0.02}s`)

        if (cd.type === "current") {
            p.addEventListener("click", e => {
                const currentSelection = document.querySelector(".selected");
                currentSelection?.classList.remove("selected");
                selectedDay = cd;
                weekdayDisplay.textContent = WEEKDAYS[new Date(currentYear, currentMonth, cd.day).getDay()];
                dayDisplay.textContent = selectedDay.day + ". " + MONTHS[currentMonth % 12];
                p.classList.add("selected");
            });
            /*p.addEventListener("dblclick", e => {
                const shortMonth = MONTHS[currentMonth % 12].slice(0, 3);
                details.querySelector("#detailsDay").textContent = cd.day;
                details.querySelector("#detailsMonth").textContent = shortMonth;
                backdrop.classList.remove("inactive");
                details.classList.remove("inactive");
                backdropActive = true;
            })*/
        }
        dateList.appendChild(p);
    })
}

function getCalendarDays(year, month) {
    const firstDayOfCurrentMonth = new Date(year, month, 1);
    const lastDayOfCurrentMonth = new Date(year, month + 1, 0);
    const lastDayOfPreviousMonth = new Date(year, month, 0);

    const firstDayWeekday = firstDayOfCurrentMonth.getDay(); // 0 = Sonntag, 1 = Montag, ...
    const daysInPreviousMonth = lastDayOfPreviousMonth.getDate();

    const days = [];

    // Berechne die Anzahl der Tage aus dem Vormonat, die angezeigt werden müssen
    const daysToShowFromPreviousMonth = (firstDayWeekday === 0) ? 6 : firstDayWeekday - 1;
    for (let i = daysInPreviousMonth - daysToShowFromPreviousMonth + 1; i <= daysInPreviousMonth; i++) {
        days.push({
            day: i,
            type: 'previous'
        });
    }

    // Füge die Tage des aktuellen Monats hinzu
    for (let i = 1; i <= lastDayOfCurrentMonth.getDate(); i++) {
        days.push({
            day: i,
            type: 'current'
        });
    }

    // Berechne die Anzahl der Tage, die angezeigt werden müssen, um eine vollständige Woche zu füllen
    const totalDays = days.length;
    const daysToShow = totalDays % 7 === 0 ? totalDays : (Math.ceil(totalDays / 7) * 7);

    // Füge die Tage des kommenden Monats hinzu, um die Wochen zu füllen
    for (let i = 1; days.length < daysToShow; i++) {
        days.push({
            day: i,
            type: 'next'
        });
    }

    return days;
}