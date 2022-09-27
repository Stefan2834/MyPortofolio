
var options = {
    series: [{
    data: [85, 70, 50, 50, 40]
  }],
    chart: {
    width: '100%',
    type: 'bar',
  },
  colors:['#f06529', '#2965f1', '#f7df1e', '#0769ad', '#fecd69'] ,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val + "%";
      }
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      ['Html5'],
      ['Css5'],
      ['JavaScript'],
      ['Jquery'],
      ['OtherJs', 'Libraries'],
    ],
    labels: {
      style: {
        fontSize: '13px',
        colors:'white',
        fontFamily:'Poppins',
        }
    }
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
}
var chart = new ApexCharts(document.querySelector("#chart"), options);
var counter = 0;

window.addEventListener('scroll', function(ev) {

  var chartApex = document.getElementById('chart');
  var distanceToTop = chartApex.getBoundingClientRect().top;
  var inaltime = window.innerHeight;
  if (distanceToTop <= inaltime / 2 && counter == 0) {
      chart.render();
      counter = 1;
  } 
});

