// Add JavaScript code here

const textC = document.querySelector('.text-c');
const chevronBtn = document.querySelector('.chevron-down');
const optionsC = document.querySelector('.options-c');
const last7 = document.getElementById('last-7')
const last30 = document.getElementById('last-30');

chevronBtn.addEventListener('click', () => {
    optionsC.classList.toggle('hidden')
});

const fChartCanva = document.getElementById('my-chart')
const sChartCanva = document.getElementById('second-chart')
// const ctx = myChart.getContext('2d');

const my7DaysData = [49.4, 31.6, 19]
const my30DaysData = [31.6, 49.4, 19]

const fChart = new Chart(fChartCanva, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [{
            data: my7DaysData,
            borderWidth: 0,
            backgroundColor: [
                '#3498db',
                '#6c5ce7',
                '#00cec9'
            ],
            weight: 0.2,
            spacing: 2,
            rotation: 180,
            cutout: 75
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
    },
});
const sChart = new Chart(sChartCanva, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Mobile", "Tablet"],
        datasets: [{
            data: my30DaysData,
            borderWidth: 0,
            backgroundColor: [
                '#3498db',
                '#6c5ce7',
                '#00cec9'
            ],
            weight: 0.2,
            spacing: 2,
            rotation: 0,
            cutout: 75
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
    },
});
sChartCanva.style.display = 'none'

const desktop = document.querySelector('.desktop')
const mobile = document.querySelector('.mobile')
const tablet = document.querySelector('.tablet')

last7.addEventListener('click', () => {
    textC.innerText = last7.innerText;
    sChartCanva.style.display = 'none'
    fChartCanva.style.display = 'block'
    optionsC.classList.toggle('hidden', true)

    desktop.innerText = '49.4%'
    mobile.innerText = '31.6%'
    tablet.innerText = '19%'
    // location.reload()
});

last30.addEventListener('click', () => {
    textC.innerText = last30.innerText;
    sChartCanva.style.display = 'block'
    fChartCanva.style.display = 'none'
    optionsC.classList.toggle('hidden', true)

    desktop.innerText = '31.6%'
    mobile.innerText = '49.4%'
    tablet.innerText = '19%'


});