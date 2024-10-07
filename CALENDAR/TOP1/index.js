// ===============================================
// Calender PRO by MIRZA.
// ===============================================

// current date
const date = new Date()
let currentMonthIndex = new Date().getMonth(); 
let currentYear = new Date().getFullYear(); 

// DOM access
const yearPre = document.querySelector(".year-pre");
const yearNow = document.querySelectorAll(".year-now > span");
const yearNext = document.querySelector(".year-next");


// Names
const monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// initializing at the header year.
yearNow[0].textContent = monthName[currentMonthIndex];
yearNow[1].textContent = currentYear;

seletedYearMonth();

// when previous year is clicked
yearPre.addEventListener("click", () => {
    if (currentMonthIndex === 0) {
        currentMonthIndex = 11; // Set to December
        currentYear--; // Decrease the year
    } else {
        currentMonthIndex--; // Decrease the month index
    }

    const previousMonth = monthName[currentMonthIndex];
    seletedYearMonth(currentYear, currentMonthIndex);
    yearNow[0].textContent = previousMonth;
    yearNow[1].textContent = currentYear;
})

// when next year is clicked
yearNext.addEventListener("click", () => {
    if (currentMonthIndex === 11) {
        currentMonthIndex = 0; // Set to January
        currentYear++; // Increase the year
    } else {
        currentMonthIndex++; // Increase the month index
    }

    const previousMonth = monthName[currentMonthIndex];
    seletedYearMonth(currentYear, currentMonthIndex);
    yearNow[0].textContent = previousMonth;
    yearNow[1].textContent = currentYear;
})


function seletedYearMonth(year = date.getFullYear(), month = date.getMonth()) {
    const calendar = document.querySelector('.dates');
    calendar.innerHTML = '';

    const selectedYear = year;
    const selectedMonth = month;

    // Function to get the number of days in a month
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    // Calculate the starting day of the month
    const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();

    const daysInSelectedMonth = getDaysInMonth(selectedYear, selectedMonth);
    const daysInPreviousMonth = getDaysInMonth(selectedYear, selectedMonth - 1);

    // Generate the empty cells for the previous month
    for (let i = firstDay - 1; i >= 0; i--) {
        const emptyCell = document.createElement('button');
        emptyCell.setAttribute("data-date", daysInPreviousMonth - i);
        emptyCell.classList.add("gray");
        if (selectedMonth - 1 == -1) {
            emptyCell.setAttribute("data-month", 11);
        } else {
            emptyCell.setAttribute("data-month", selectedMonth - 1);
        }
        calendar.appendChild(emptyCell);
    }

    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    for (let d = 1; d <= daysInMonth; d++) {
        const button = document.createElement('button');
        button.textContent = d;
        button.setAttribute('data-date', d);

        if (d === date.getDate() && selectedMonth === date.getMonth() && selectedYear === date.getFullYear()) {
            button.classList.add('current');
        }
        calendar.appendChild(button);
    }

    // Calculate the number of cells needed for the next month
    const numRows = Math.ceil((firstDay + daysInSelectedMonth) / 7);
    const remainingCells = numRows * 7 - (firstDay + daysInSelectedMonth);

    // Generate the empty cells for the next month
    for (let i = 1; i <= remainingCells; i++) {
        const nextemptyCell = document.createElement('button');
        nextemptyCell.textContent = i;
        nextemptyCell.setAttribute("data-date", i);
        nextemptyCell.classList.add("gray");
        if (selectedMonth + 1 == 12) {
            nextemptyCell.setAttribute("data-month", selectedMonth - 11);
        } else {
            nextemptyCell.setAttribute("data-month", selectedMonth + 1);
        }
        calendar.appendChild(nextemptyCell);
    }
}

// =====================================================
// Event Layout
// ======================================================
const closeModelEvent = document.querySelector(".btn-closeModel");
const calenderIcon = document.querySelector(".calender-icon");
const templateList = document.querySelector("#template-list");
const setDateValue = document.querySelector(".setDateValue");
const datesCollection = document.querySelector(".dates");
const addEvent = document.querySelector(".btn-addevent");
const modelEvent = document.querySelector(".model-list");
const setDayName = document.querySelector(".setDayName");
const saveList = document.querySelector(".btn-addlist");
const eventList = document.querySelector(".event-list");
const container = document.querySelector(".container");
const inputTitle = document.getElementById("title");
const inputTime = document.getElementById("time");
 
// Listeners
datesCollection.addEventListener("click", fnUpdateEventDate);
closeModelEvent.addEventListener("click", closeModel);
saveList.addEventListener("click", fnSaveList);
addEvent.addEventListener("click", openModel);
window.addEventListener("load", pickToday);



// Helper function
function pickToday() {
    const todayEvent = [
        dayName[date.getDay()],
        monthName[currentMonthIndex],
        date.getDate(),
        currentYear
    ] 
    // update by today's date
    setDayName.textContent = todayEvent[0];
    setDateValue.textContent = `${todayEvent[1]} ${todayEvent[2]}, ${todayEvent[3]}`
}

function getList() {
    const clone = templateList.content.cloneNode(true);
    const title = clone.querySelector("h5");
    const time = clone.querySelector("p");
    title.textContent = inputTitle.value;
    time.textContent = inputTime.value
    eventList.appendChild(clone);  
}

function closeModel() {
    modelEvent.classList.remove("model-transition");
    container.style.pointerEvents = "initial";
}

function openModel() {
    modelEvent.classList.add("model-transition");
    container.style.pointerEvents = "none";
}

function pickedDate(e) {
    // when date buttons are clicked, its bg changes to know what I am selected.
    // ? e = which button should change bg
    datesCollection.querySelectorAll("button").forEach((v, i) => {
        v.classList.remove("event");
    })
    e.target.classList.add("event");
}

// Save What I write in the event title and date input, otherwise closes.
function fnSaveList() {
    if (inputTitle.value == "") {
        alert("Please, fill the title");
    } else {
        getList();
        closeModel();
        calenderIcon.classList.add("more-opacity");
    }
}

// Update day and date in the Event layout when a date is picked.
function fnUpdateEventDate(e) {
    const getDateValue = e.target.dataset.date;
    const getMonthValue = yearNow[0].textContent;
    const getYearValue = yearNow[1].textContent;
    const getDayValue = new Date(getYearValue, currentMonthIndex, getDateValue).getDay();


    // ++++++++++      +++++++++++           +++++++++++
    // Bug Fixed :: Check whether it is a button or not.
    // +++++++++++++++++++++++++++++++++++++++++++++++++
    if (!e.target.matches("button")) {
        return;
    }
    // +++++++++++++++++++++++++++++++++++++++++++++++++

    setDayName.textContent = dayName[getDayValue];
    setDateValue.textContent = `${getMonthValue} ${getDateValue}, ${getYearValue}`;
    pickedDate(e);

    let emptyVal = e.target.dataset.month;
    if (emptyVal) {
        setDateValue.textContent = `${monthName[emptyVal]} ${getDateValue}, ${getYearValue}`;
        let emptyDay = new Date(getYearValue, emptyVal, getDateValue);
        setDayName.textContent = dayName[emptyDay.getDay()];
    };
}