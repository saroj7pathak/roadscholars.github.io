var names = [
   "Asphalt concrete layer",
   "Portland cement concrete layer",
   "Subgrade (untreated)",
   "Unbound (granular) base",
];
var prcnt = [
  14.615385,
  2.428571,
  11.4,
  0.166667,
];
var length = [
  302.461538,
  90.571429,
  22.8,
  4,
];
var mix = document.getElementById("HAgeVcrack").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                type: 'line',
                label: "Crack Length",
                data: length,
                borderColor: 'rgba(192, 0, 0, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                yAxisID: 'Crack Length',
            },
            {
                label: "Crack Percentage",
                data: prcnt,
                borderColor: ['rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
                backgroundColor: ['rgba(75, 192, 192, 0.2)',
                  'rgba(192, 0, 0, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'],
                yAxisID: 'Crack Percentage',
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    id: "Crack Length",
                    ticks: {
                        beginAtZero: true,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Crack Length'
                      },
                  gridLines: {
                      display: false
                  }
                },
                {
                    id: "Crack Percentage",
                    position: 'right',
                    ticks: {
                        beginAtZero: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Crack Percentage'
                      },
                  gridLines: {
                    display: false
                  }
                },
            ],
          xAxes: [{
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Road Type'
            },
          }
          ]
        },
    }
});
