
//$(document).ready(function() {
$(document).ready(function() {
  $('#example').DataTable( {
    "ajax": 'data.json'
  } );

  //buildChart();
  loadData("deathDates.json");
} );
// }=);





var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'heroinDeathsAge.csv',
      type: 'bar',
      axes: {
        data1: 'Age'
      },
      tick: {
         format: d3.format("$") // ADD
       }
    },
    color: {
      pattern: ['#489FB7', '#489FB7']
    },
    axis: {
      y: {
        label: { // ADD
          text: 'Deaths ',
          position: 'outer-middle'
        }
      },
      x: {
        show: true,
        label: { // ADD
          text: 'Age',
          position: 'outer-middle'
        }
      }
    }
});



//Pie Charts
var chartPie = c3.generate({
  bindto: '#genderPie',
  data: {
    columns: [
      ['Male ', 1106],
      ['Female ', 308],
    ],
    type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  color: {
    pattern: ['#AFD4DD', '#8DD3C6']
  },
});

var chartPie = c3.generate({
  bindto: '#racePie',
  data: {
    columns: [
      ['White ', 1138],
      ['Hispanic ', 170],
      ['Black ', 38]
    ],
    type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
    color: {
        pattern: ['#AFD4DD', '#8DD3C6' , '#55A4B7' ]
  },
});

//////////////////////
/// TIMELINE CHART ///
//////////////////////


// $( document ).ready(function() {
//
//
// });

function loadData(dataURL){

  $.ajax({
  method: "GET",
  url: dataURL,
  dataType: "json",
  success: parseData
});

}


function parseData(data) {
  // console.log(data);
  // console.log(data.deathDates[0].Date);
  // console.log(parseFloat(data.deathDates[0].Deaths));

  data1 = ["Dates"];
  data2 = ["Deaths"];

  $.each(data.deathDates, function(i, item){
    // console.log(i);
    // console.log(item);
    data1.push(item.Dates);
    data2.push(item.Deaths);

    // console.log(data1);
    // console.log(data2);

  })
  buildChart();
}


function buildChart() {
  var chart = c3.generate({
    // First item defines its name
      bindto: '#timeline',
      data: {
        x: 'date',
        columns: [data2],
        axes: {
          // data2: 'y2'
          Deaths: 'y2'
          // Can be called anything 'data2' or
        },
        types: {
          Deaths: 'bar'
        }
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle'
          },
          tick: {
            format: d3.format("$,") // ADD
          }
        },
        x: {
	      type: 'timeseries',
        tick: {
                format: "%b-%Y"
            }
	    },
      }
  });
};

///////////////////////
///////Date Deaths///////
///////////////////////

// var chart = c3.generate({
//     bindto: '#time',
//     data: {
//       columns: [
//             ['data1', 30, 200, 100, 400, 150, 250],
//         ],
//       axes: {
//         data1: 'Age'
//       },
//       // Add a type to object to change display type
//       // types: {
//       //   data2: 'bar' // ADD
//       // },
//       // Add a tick to add a character to the data on this axis
//       tick: {
//          format: d3.format("$") // ADD
//        }
//     },
//     color: {
//       pattern: ['#489FB7', '#489FB7']
//     },
//     axis: {
//       y: {
//         label: { // ADD
//           text: 'Deaths ',
//           position: 'outer-middle'
//         }
//       },
//       x: {
//         show: true,
//         label: { // ADD
//           text: 'Age',
//           position: 'outer-middle'
//         }
//       }
//     }
// });

var chart = c3.generate({
  bindto: '#time',
    data: {
        columns: [
            ['Deaths', 14,10,6,17,13,13,11,20,17,14,13,25,18,25,21,17,8,25,18,21,19,24,32,29,32,27,28,21,29,28,21,27,28,30,32,22,24,32,22,32,25,31,47,32,45,47,46,32,34,40,35,46,45,44]
        ]
    },
    axis: {
      y: {
              label: { // ADD
                text: 'Deaths ',
                position: 'outer-middle'
              }
            },
        x: {
            show: false,
            type: 'category',
            categories: ["1/12","2/12","3/12","4/12","5/12","6/12","7/12","8/12","9/12","10/12","11/12","12/12","1/13","2/13","3/13","4/13","5/13","6/13","7/13","8/13","9/13","10/13","11/13","12/13","1/14","2/14","3/14","4/14","5/14","6/14","7/14","8/14","9/14","10/14","11/14","12/14","1/15","2/15","3/15","4/15","5/15","6/15","7/15","8/15","9/15","10/15","11/15","12/15","1/16","2/16","3/16","4/16","5/16","6/16"],
            text: 'Dates',
            tick: {
              labels: {
                show: false,
              }
            }
        }
    }
});
