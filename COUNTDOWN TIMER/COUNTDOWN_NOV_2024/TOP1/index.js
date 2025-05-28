const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const targetDate = new Date("09/07/2025"); 

function updateCountdown() {
    const date = new Date();
    const today = date.getTime(); 


    const timeDifference = targetDate - today;

    if (timeDifference <= 0) {

        clearInterval(interval);
        daysDOM.innerText = "00";
        hoursDOM.innerText = "00";
        minutesDOM.innerText = "00";
        secondsDOM.innerText = "00";
        return;
    }


    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


    daysDOM.innerText = String(days).padStart(2, '0');
    hoursDOM.innerText = String(hours).padStart(2, '0');
    minutesDOM.innerText = String(minutes).padStart(2, '0');
    secondsDOM.innerText = String(seconds).padStart(2, '0');
}


const interval = setInterval(updateCountdown, 1000);
