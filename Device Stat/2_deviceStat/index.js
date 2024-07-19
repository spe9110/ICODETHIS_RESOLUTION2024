// Add JavaScript code here
const ctx = document.getElementById('myChart');
const details = document.querySelector('.details ul')

const chartData = {
    backgroundColor: [
        'rgb(66, 125, 223)',
        'rgb(92, 80, 219)',
        'rgb(80, 168, 172)'
    ],
    backgroundColorHex: [
        '#427ddf',
        '#5c50db',
        '#50a8ac'
    ],
    labels: ['Desktop', 'Mobile', 'Tablet'],
    data: [49.4, 31.6, 19],
};

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: chartData.labels,
        datasets: [{
            label: 'Sessions by device in %',
            data: chartData.data,
            backgroundColor: chartData.backgroundColor,
            hoverOffset: 4
        }]
    },
    options: {
        borderColor: 'rgb(27, 30, 43)',
        cutout: '80%',
        animation: {
            animateScale: true
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }

});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        details.innerHTML += `
            <li >
                <div class="flex gap-2 items-center ">
                    <span class="bg-[${chartData.backgroundColorHex[i]}] size-2 rounded-full flex justify-center text-[#1e2256]"></span>
                    <p>${l}</p>
                </div>
                <p class="font-bold flex justify-center ml-2 text-white/80">${chartData.data[i]}% </p>    
            </li>
        `

    });
};

populateUl();

