$(function () {

Highcharts.chart('chart1', {

    title: {
        text: 'Temperature changes in the last 3 hours'
    },
    yAxis: {
        title: {
            text: '°C'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Temperature',
        data: [20, 21, 24, 20, 19, 18, 20, 22, 24]
    }
     ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('chart2', {
    title: {
        text: 'Light changes in the last 3 hours'
    },
    yAxis: {
        title: {
            text: '....'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Light',
        data: [20, 21, 24, 20, 19, 18, 20, 22, 24]
    }
     ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('chart3', {
    title: {
        text: 'Humidity changes in the last 3 hours'
    },
    yAxis: {
        title: {
            text: '....'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Humidity',
        data: [20, 21, 24, 20, 19, 18, 20, 22, 24]
    }
     ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('chart4', {
    title: {
        text: 'Pressure changes in the last 3 hours'
    },
    yAxis: {
        title: {
            text: '....'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Pressure',
        data: [20, 21, 24, 20, 19, 18, 20, 22, 24]
    }
     ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


});