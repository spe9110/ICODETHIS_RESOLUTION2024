// Write your JavaScript code here
function countdown(targetDate) {
    const target = new Date(targetDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = target - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "<p>The event has passed!</p>";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

countdown("December 9, 2024 00:00:00");
