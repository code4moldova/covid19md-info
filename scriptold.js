(function ($) {
  // USE STRICT
  "use strict";
  var label_1 = $.i18n( 'zilnic' );
  var label_2 = $.i18n( 'locale' );
  var label_3 = $.i18n( 'importate' );
  var label_4 = $.i18n( 'varsta' );
  var label_5 = $.i18n( 'intrari' );
  var label_6 = $.i18n( 'monitor' );
  var label_7 = $.i18n( 'fise' );

  var  d = {};
  
  for(var k in data[data.length-1]){
    d[k] = data[data.length-1][k];
    d['y_'+k] = [];
    $('.'+k).html(d[k])
    var l = 0;
    for(var i of data){
      if(l==i['data']){
        d['y_'+k][d['y_'+k].length-1] = i[k]
      }else
        d['y_'+k].push(i[k])
      l = i['data']
    }
  }
  data = d;
  for (var i in data['y_data'])
    data['y_data'][i] = data['y_data'][i].split('/2020')[0]
  data['rata_crestere'] = []
  var l = 0;
  for(var i of d['y_infectate']){
    data['rata_crestere'].push(i-l);
    l=i;
  }
  console.log(data['rata_crestere'])

  $('#dataup').text(lastUpdate);

  $('.statistic__item').css('cursor','pointer').click(function(){
    //alert(1)
  })

  try {
    //WidgetChart 5
    var ctx = document.getElementById("chart1");
    if (ctx) {
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels:  data['y_data'],//[['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "Cazuri confirmate zilnic",
              data: data['rata_crestere'],//[78, 81, 80, 64, 65, 80, 70, 75, 67, 85, 66, 68],
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

    //doughut chart
    var ctx = document.getElementById("doughutChart1");

    if (ctx) {
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [infectariLocale, cazuriImportate],
            backgroundColor: [
              "red",
              "orange",
            ],

          }],
          labels: [
            "Infectări Locale",
            "Cazuri Importate",
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
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
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: intervalAni,//["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "Cazuri confirmate pe vîrstă",
              data: infectatiAni,
              borderColor: "red",
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
    //bar chart
    var ctx = document.getElementById("bigchart");
    if (ctx) {
      var nume = window.location.href.split('#')
      nume = nume[nume.length-1];
      var labels = {y_infectate:'Infectati',y_suspecte:"Suspecti",y_vindecati:"Vindecati",y_decedati:'Decedati'}
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: data['y_data'],
          datasets: [
            {
              label: labels[nume],
              data: data[nume],
              borderColor: "red",
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
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels:  data['y_data'],//[ ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            label: "Intrări în țară",
            data: data['y_intrate in tara'],//[0, 30, 10, 120, 50, 63, 10],
            backgroundColor: 'transparent',
            borderColor: 'orange',
            borderWidth: 3,
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'orange',
          }, {
            label: "Monitorizați la domiciliu",
            data: data['y_monitorzare'],//[0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'black',
            borderWidth: 3,
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'black',
          }, {
            label: "Fișe epidemologice",
            data: data['y_fise epidemologice'],//[0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 3,
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
            display: true,
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


function plotsmall(canvas, label, key){
  try {
    //Sales chart
    var ctx = document.getElementById(canvas);
    $('#'+canvas).click(function(){
      //#alert(canvas+window.location.href)
      window.location = 'chart.html#'+key;
    })
    if (ctx) {
      ctx.height = 70;
      ctx.width = 200;

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels:  data['y_data'],//[ ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            label: label,
            data: data[key],//[0, 30, 10, 120, 50, 63, 10],
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 0,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(220,53,69,0.75)',
          }]
        },
        options: {
          responsive: false,
          
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },
          },
          scales: {
            xAxes: [{
              display: false,
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
              display: false,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
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
}
plotsmall("sales-chart2", "Infectati", 'y_infectate')
plotsmall("sales-chart3", "Suspecti", 'y_suspecte')
plotsmall("sales-chart4", "Vindecati", 'y_vindecati')
plotsmall("sales-chart5", "Decedati", 'y_decedati')

})(jQuery);