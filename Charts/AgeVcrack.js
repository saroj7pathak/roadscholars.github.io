var names = [
   "2824",
   "803",
   "805",
   "2118",
   "805",
   "1992",
   "1352",
   "801",
   "1065",
   "804",
   "1640",
   "1645",
   "7322",
   "1016",
   "AA61",
   "802",
   "806",
   "1024",
   "806",
   "6056",
   "805",
   "1006",
   "AA03",
   "1803",
   "A806",
   "AA02",
   "1024",
   "1814",
   "AA61",
   "1028",
   "1007",
   "802",
   "1111",
   "4100",
   "801",
   "AA01",
   "AA03",
   "AA02",
   "1029",
   "A805",
   "806",
   "AA01",
   "AA62",
   "802",
   "3024",
   "2819",
   "2001",
   "1005",
   "801",
   "1003",
   "3008,"
];
var crack = [
  7788,
  1684,
  2505,
  2044,
  1441,
  3257,
  3617,
  1673,
  5689,
  527,
  558,
  2314,
  135,
  6105,
  3686,
  2086,
  1438,
  856,
  2411,
  308,
  2387,
  5037,
  6167,
  1500,
  2993,
  4428,
  1996,
  1531,
  7712,
  1663,
  579,
  1088,
  2557,
  1493,
  1732,
  4882,
  4175,
  3388,
  883,
  2138,
  2751,
  3589,
  336,
  1566,
  5526,
  1715,
  4407,
  956,
  1036,
  2339,
  2068,
];
var age = [
  37,
  23,
  23,
  40,
  24,
  30,
  40,
  22,
  43,
  23,
  37,
  34,
  47,
  41,
  33,
  24,
  23,
  35,
  24,
  51,
  26,
  45,
  33,
  43,
  21,
  33,
  43,
  50,
  61,
  37,
  37,
  24,
  48,
  44,
  24,
  33,
  61,
  61,
  38,
  21,
  26,
  61,
  49,
  22,
  36,
  39,
  41,
  47,
  24,
  45,
  36,
];
var mix = document.getElementById("AgeVcrack").getContext('2d');
var mixChart = new Chart(mix, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                type: 'line',
                label: "Crack Length",
                data: crack,
                borderColor: 'rgba(192, 0, 0, 0.5)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                yAxisID: 'Crack Length',
            },
            {
                label: "Age",
                data: age,
                borderColor: 'rgba(0, 0, 0, 0)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                yAxisID: 'age',
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
                    id: "age",
                    position: 'right',
                    ticks: {
                        beginAtZero: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Age(Yrs)'
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
              labelString: 'SHRP ID'
            },
          }
          ]
        },
    }
});
