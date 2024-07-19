// Write your JavaScript code // Write your JavaScript code // Add JavaScript code
console.clear();
const links = document.querySelectorAll('a');
const card = document.querySelector('.card');
const dropdown = document.querySelector('.dropdown');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown-item > a');
const chartGraphic = document.querySelector('.chart-graphic');
const chartGraphicParagraph = document.querySelector('.chart-graphic > p');
const legendList = document.querySelector('.legend-list');
const legendItems = document.querySelectorAll('.legend-item');
const legendItemPercentagesEl = document.querySelectorAll('.legend-item > p');


const DATA = {
    'lastSevenDays': [49.4, 31.6, 19],
    'lastMonth': [37.2, 49.2, 14.6],
    'lastYear': [68, 20.3, 11.7],
}


// (Override Anchor tags default behaviour
const overrideLinkBehaviour = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};


// Pie Chart
const context = document.getElementById("myChart");
const myChart = new Chart(context, {
    type: 'doughnut',
    data: {
        label: '',
        labels: ['Desktop', 'Nobile', 'Tablet'],
        datasets: [{
            label: 'Recycled',
            data: [49.4, 31.6, 19],
            backgroundColor: [
                'hsl(257, 64%, 52%)',
                'hsl(286, 41%, 52%)',
                'hsl(264, 18%, 52%)',
            ],
            borderWidth: 0,
            hoverOffset: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            // Animation entry style
            easing: 'easeInOutElastic',
            // Delays initial chart animation
            delay: 4000,
        },
        cutout: "80%",
        spacing: 2,
        borderRadius: 0,
        plugins: {
            legend: {
                display: false,
            },

        },
        layout: {
            padding: {
                bottom: 5,
                top: 5,
            },
        }
    },
});


// Update Chart with new dataset
const updateChart = (newData) => {
    // Quit animation delay;
    myChart.options.animation.delay = 0;
    // Changing Chart object data
    myChart.data.datasets[0].data = newData;
    //Updates CHart the chart (Peter from the future, remember that passing "none" as a parameter we can avoid animation when updating. This way myChart.update('none'))
    myChart.update();
}

// Update Stats data
const updateData = (key) => {
    let newData = DATA[key];

    // Update chartjs chart with new dataset;
    updateChart(newData);
    
    // Exit anmation for each value
    legendItemPercentagesEl.forEach((elem) => {
        elem.classList.add('change--active');
    })

    // Updates elem with new percentage
    setTimeout(() => {
        legendItemPercentagesEl.forEach((elem, i) => {
            elem.innerText = `${newData[i]}%`;
        })
    }, 250)

    // Entry anmation for each value
    setTimeout(() => {
        legendItemPercentagesEl.forEach((elem) => {
            elem.classList.remove('change--active');
        });
    }, 300)
}

// Handle dropdowns
const handleDropdowns = () => {
    dropdownBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (btn.parentNode.classList.contains('dropdown--open')) {
                // Close all dropdowns
                dropdownBtns.forEach(btn => {
                    btn.parentNode.classList.remove('dropdown--open');
                    btn.parentNode.querySelector('.dropdown-list').inert = true;
                })
            } else {
                // Close all dropdowns
                dropdownBtns.forEach(btn => {
                    btn.parentNode.classList.remove('dropdown--open');
                    btn.parentNode.querySelector('.dropdown-list').inert = true;
                })
                // Open clicked dropdown
                btn.parentNode.classList.add('dropdown--open');
                btn.parentNode.querySelector('.dropdown-list').inert = false;

            }
        });
    });
}

const handleDropdownItems = () => {
    dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const relatedDropdownBtn = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.dropdown-btn');
            const relatedDropdownBtnText = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.dropdown-btn > p');
            e.currentTarget.parentNode.parentNode.querySelectorAll('.dropdown-item').forEach((item) => {
                item.classList.remove('dropdown-item--active');
            })
            e.currentTarget.parentNode.classList.add('dropdown-item--active');
            relatedDropdownBtnText.textContent = e.currentTarget.textContent;
            relatedDropdownBtn.parentNode.classList.remove('dropdown--open');
            updateData(e.currentTarget.parentNode.dataset.key);
        });
    });
}


//The Marcin Malecki's way for thumbnail perfection
if (navigator.userAgent.includes("Headless")) {
    card.style.transitionDuration = '0s';
    card.classList.add('initial--animation');
    dropdown.style.transitionDuration = '0s';
    dropdown.classList.add('initial--animation');

    legendItems.forEach((item) => {
        item.style.transitionDuration = '0s';
        item.classList.add('legend-item--active')
    });

}


window.addEventListener('DOMContentLoaded', () => {
    overrideLinkBehaviour();
    handleDropdowns();
    handleDropdownItems();
    setTimeout(() => {
        card.classList.add('initial--animation');
        dropdown.classList.add('initial--animation');
    }, 1000);
    setTimeout(() => {
        chartGraphicParagraph.classList.add('p--active');
    }, 3000);



    setTimeout(() => {
        legendItems.forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('legend-item--active')
            }, i * 200)

        });

    }, 3400);
});
