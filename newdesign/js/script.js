(function ($) {
  // USE STRICT
  "use strict";

  var  d = {};
  for(var k in data[data.length-1]){
    d[k] = data[data.length-1][k];
    d['y_'+k] = [];
    $('.'+k).html(d[k])
    for(var i of data){
      d['y_'+k].push(i[k])
    }
  }
  data = d;
  $('#dataup').text(lastUpdate);

  try {
    //WidgetChart 5
    var ctx = document.getElementById("chart1");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels:  data['y_data'],//[['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "Infectati",
              data: data['y_infectate'],//[78, 81, 80, 64, 65, 80, 70, 75, 67, 85, 66, 68],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "red",
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {
    //bar chart
    var ctx = document.getElementById("barChart1");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: data['y_data'],//["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Linia verde",
              data: data['y_linia_verde'],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              fontFamily: "Poppins"
            },
            {
              label: "Suspecti",
              data: data['y_suspecte'],
              borderColor: "rgba(0,0,0,0.09)",
              borderWidth: "0",
              backgroundColor: "red",
              fontFamily: "Poppins"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }


  try {
    //Sales chart
    var ctx = document.getElementById("sales-chart1");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels:  data['y_data'],//[ ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            label: "Intrari in tara",
            data: data['y_intrate in tara'],//[0, 30, 10, 120, 50, 63, 10],
            backgroundColor: 'transparent',
            borderColor: 'rgba(220,53,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(220,53,69,0.75)',
          }, {
            label: "Monitorizare",
            data: data['y_monitorzare'],//[0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'rgba(40,167,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(40,167,69,0.75)',
          }, {
            label: "Fise epidemologice",
            data: data['y_fise epidemologice'],//[0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'red',
          }]
        },
        options: {
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Month'
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value',
                fontFamily: "Poppins"

              },
              ticks: {
                fontFamily: "Poppins"
              }
            }]
          },
          title: {
            display: false,
            text: 'Normal Legend'
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }


})(jQuery);