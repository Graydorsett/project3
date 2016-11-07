var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: 'heroinDeaths_age.csv',
      type: 'bar',
      axes: {
        data1: 'Age'
      },
      // Add a type to object to change display type
      // types: {
      //   data2: 'bar' // ADD
      // },
      // Add a tick to add a character to the data on this axis
      tick: {
         format: d3.format("$") // ADD
       }
    },
    color: {
      pattern: ['orange', 'blue']
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
    pattern: ['lightblue', 'pink']
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
  }

});

//////////////////////
/// TIMELINE CHART ///
//////////////////////


$( document ).ready(function() {
  loadData("deathDates.json");
  //buildChart();
});

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
}; // Buildchart
