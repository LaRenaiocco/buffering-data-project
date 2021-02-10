"use strict"

const worldChart = new Chart($('#worldchart'), {
    type: 'pie',
    data: {
        labels: ['Australia', 'Belgium', 'Bermuda', 'Brazil', 'Canada', 'China',
                'Denmark', 'Ecuador', 'Finland', 'France', 'Germany', 
                'Honduras', 'Israel', 'Mexico', 'The Netherlands', 'New Zealand',
                'Norway', 'Spain', 'Sweden', 'United Kingdom', 'United States'],
        datasets: [{
            label: 'Slayers of the World',
            data: [11, 1, 1, 2, 35, 1, 2, 1, 3, 2, 9, 1, 3, 2, 3, 2, 2, 2, 20, 66, 376],
            backgroundColor: [
                'rgba(252, 3, 223)',
                'rgba(252, 3, 136)',
                'rgba(252, 3, 65)',
                'rgba(255, 0, 0)',
                'rgba(252, 94, 3)',
                'rgba(252, 144, 3)',
                'rgba(252, 194, 3)',
                'rgba(252, 244, 3)',
                'rgba(210, 252, 3)',
                'rgba(157, 252, 3)',
                'rgba(98, 252, 3)',
                'rgba(18, 201, 12)',
                'rgba(9, 158, 32)',
                'rgba(13, 186, 137)',
                'rgba(3, 252, 223)',
                'rgba(3, 202, 252)',
                'rgba(2, 169, 191)',
                'rgba(3, 128, 252)',
                'rgba(17, 40, 214)',
                'rgba(24, 6, 189)',
                'rgba(97, 6, 189)'
            ], 
            borderWidth: 1,
            hoverBorderWidth: 2, 
            hoverBorderColor: 'rgba(218, 219, 230)',
        }]
    }
});

const USChart = new Chart($('#uschart'), {
    type: 'pie',
    data: {
        labels: ['AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 
                'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 
                'MN', 'MO', 'NC', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 
                'OK', 'OR', 'PA', 'RI', 'SC', 'TN', 'TX', 'UT', 'VA', 'VT', 
                'WA', 'WI'],
        datasets: [{
            data: [4, 47, 8, 10, 9, 2, 9, 4, 1, 3, 1, 23, 6, 1, 4, 1, 13, 9,
                5, 11, 10, 4, 12, 2, 2, 11, 3, 2, 34, 10, 1, 15, 22, 3, 3, 3,
                17, 2, 10, 2, 24, 12],
            backgroundColor: [
                'rgba(184, 10, 4)',
                'rgba(209, 38, 4)',
                'rgba(237, 5, 5)',
                'rgba(224, 59, 34)',
                'rgba(242, 93, 7)',
                'rgba(255, 104, 3)',
                'rgba(245, 146, 24)',
                'rgba(255, 198, 41)',
                'rgba(255, 230, 0)',
                'rgba(252, 236, 61)',
                'rgba(252, 249, 157)',
                'rgba(227, 252, 63)',
                'rgba(213, 242, 19)',
                'rgba(171, 217, 4)',
                'rgba(153, 235, 2)',
                'rgba(112, 196, 2)',
                'rgba(75, 173, 23)',
                'rgba(33, 181, 7)',
                'rgba(20, 150, 33)',
                'rgba(4, 112, 49)',
                'rgba(6, 153, 99)',
                'rgba(15, 145, 126)',
                'rgba(17, 214, 185)',
                'rgba(7, 230, 222)',
                'rgba(7, 200, 230)',
                'rgba(0, 166, 255)',
                'rgba(0, 91, 247)',
                'rgba(11, 47, 189)',
                'rgba(1, 27, 128)',
                'rgba(10, 5, 84)',
                'rgba(55, 29, 117)',
                'rgba(87, 31, 161)',
                'rgba(106, 33, 204)',
                'rgba(158, 57, 230)',
                'rgba(199, 77, 247)',
                'rgba(198, 54, 217)',
                'rgba(239, 39, 242)',
                'rgba(242, 17, 216)',
                'rgba(247, 7, 183)',
                'rgba(227, 5, 123)',
                'rgba(217, 2, 88)',
                'rgba(196, 6, 54)'
            ],
            borderWidth: 1,
            hoverBorderWidth: 2,
            borderColor: 'rgba(138, 134, 158)',
            hoverBorderColor: 'rgba(68, 66, 77)'
        }]
    }
});

const canChart = new Chart($('#canchart'), {
    type: 'bar',
    data: {
        labels: ['Alberta', 'British Columbia', 'Manitoba', 
            'Newfoundland and Labrador', 'Nova Scotia', 'Ontario',
            'Quebec'],
        datasets: [{
            label: '# of watchers',
            data: [2, 9, 2, 1, 3, 10, 8],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 0, 204, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 0, 204, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})