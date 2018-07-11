// JavaScript File

document.getElementById("Average1").value;

google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawVisualization);





function drawVisualization() {
  //gets the input from each field in the table
  var m1 = document.getElementById("Month1").value;
  var m2 = document.getElementById("Month2").value;
  var m3 = document.getElementById("Month3").value;
  var m4 = document.getElementById("Month4").value;
  var m5 = document.getElementById("Month5").value;
  var m6 = document.getElementById("Month6").value;
  var m7 = document.getElementById("Month7").value;
  var m8 = document.getElementById("Month8").value;
  var m9 = document.getElementById("Month9").value;
  var m10 = document.getElementById("Month10").value;

  var c1m1 = document.getElementById("c1m1").value;
  var c1m2 = document.getElementById("c1m2").value;
  var c1m3 = document.getElementById("c1m3").value;
  var c1m4 = document.getElementById("c1m4").value;
  var c1m5 = document.getElementById("c1m5").value;
  var c1m6 = document.getElementById("c1m6").value;
  var c1m7 = document.getElementById("c1m7").value;
  var c1m8 = document.getElementById("c1m8").value;
  var c1m9 = document.getElementById("c1m9").value;
  var c1m10 = document.getElementById("c1m10").value;

  var c2m1 = document.getElementById("c2m1").value;
  var c2m2 = document.getElementById("c2m2").value;
  var c2m3 = document.getElementById("c2m3").value;
  var c2m4 = document.getElementById("c2m4").value;
  var c2m5 = document.getElementById("c2m5").value;
  var c2m6 = document.getElementById("c2m6").value;
  var c2m7 = document.getElementById("c2m7").value;
  var c2m8 = document.getElementById("c2m8").value;
  var c2m9 = document.getElementById("c2m9").value;
  var c2m10 = document.getElementById("c2m10").value;

  var c3m1 = document.getElementById("c3m1").value;
  var c3m2 = document.getElementById("c3m2").value;
  var c3m3 = document.getElementById("c3m3").value;
  var c3m4 = document.getElementById("c3m4").value;
  var c3m5 = document.getElementById("c3m5").value;
  var c3m6 = document.getElementById("c3m6").value;
  var c3m7 = document.getElementById("c3m7").value;
  var c3m8 = document.getElementById("c3m8").value;
  var c3m9 = document.getElementById("c3m9").value;
  var c3m10 = document.getElementById("c3m10").value;

  var c4m1 = document.getElementById("c4m1").value;
  var c4m2 = document.getElementById("c4m2").value;
  var c4m3 = document.getElementById("c4m3").value;
  var c4m4 = document.getElementById("c4m4").value;
  var c4m5 = document.getElementById("c4m5").value;
  var c4m6 = document.getElementById("c4m6").value;
  var c4m7 = document.getElementById("c4m7").value;
  var c4m8 = document.getElementById("c4m8").value;
  var c4m9 = document.getElementById("c4m9").value;
  var c4m10 = document.getElementById("c4m10").value;

  var Average1 = document.getElementById("Average1").value;
  var Average2 = document.getElementById("Average2").value;
  var Average3 = document.getElementById("Average3").value;
  var Average4 = document.getElementById("Average4").value;
  var Average5 = document.getElementById("Average5").value;
  var Average6 = document.getElementById("Average6").value;
  var Average7 = document.getElementById("Average7").value;
  var Average8 = document.getElementById("Average8").value;
  var Average9 = document.getElementById("Average9").value;
  var Average10 = document.getElementById("Average10").value;

  var x = document.getElementById("X-axis").value;
  var y = document.getElementById("Y-axis").value;


  //This mess of if statements is intended to account for when less than all of the months are filled, otherwise spacing is way off. 
  //As a consquence, must start in the first box and fill out the months (consecutively) for each one that should be rendered

  if (m1 == "") {
    console.log("No data!");
  }

  if (!isNaN(c1m1) & !isNaN(c2m1) & !isNaN(c3m1) & !isNaN(c4m1)) {
    if (m1 != "") {
      if (m2 != "") {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
          [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
          [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        ]);
      }
      if (m2 == "") {
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
          [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        ]);
      }
    }

    if (m1 != "" & m2 != "" & m3 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)]
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "" & m6 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
        [m6, parseInt(c1m6), parseInt(c2m6), parseInt(c3m6), parseInt(c4m6), parseFloat(Average6)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "" & m6 != "" & m7 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
        [m6, parseInt(c1m6), parseInt(c2m6), parseInt(c3m6), parseInt(c4m6), parseFloat(Average6)],
        [m7, parseInt(c1m7), parseInt(c2m7), parseInt(c3m7), parseInt(c4m7), parseFloat(Average7)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "" & m6 != "" & m7 != "" & m8 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
        [m6, parseInt(c1m6), parseInt(c2m6), parseInt(c3m6), parseInt(c4m6), parseFloat(Average6)],
        [m7, parseInt(c1m7), parseInt(c2m7), parseInt(c3m7), parseInt(c4m7), parseFloat(Average7)],
        [m8, parseInt(c1m8), parseInt(c2m8), parseInt(c3m8), parseInt(c4m8), parseFloat(Average8)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "" & m6 != "" & m7 != "" & m8 != "" & m9 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
        [m6, parseInt(c1m6), parseInt(c2m6), parseInt(c3m6), parseInt(c4m6), parseFloat(Average6)],
        [m7, parseInt(c1m7), parseInt(c2m7), parseInt(c3m7), parseInt(c4m7), parseFloat(Average7)],
        [m8, parseInt(c1m8), parseInt(c2m8), parseInt(c3m8), parseInt(c4m8), parseFloat(Average8)],
        [m9, parseInt(c1m9), parseInt(c2m9), parseInt(c3m9), parseInt(c4m9), parseFloat(Average9)],
      ]);
    }

    if (m1 != "" & m2 != "" & m3 != "" & m4 != "" & m5 != "" & m6 != "" & m7 != "" & m8 != "" & m9 != "") {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'Country 1', 'Country 2', 'Country 3', 'Country 4', 'Average'],
        [m1, parseInt(c1m1), parseInt(c2m1), parseInt(c3m1), parseInt(c4m1), parseFloat(Average1)],
        [m2, parseInt(c1m2), parseInt(c2m2), parseInt(c3m2), parseInt(c4m2), parseFloat(Average2)],
        [m3, parseInt(c1m3), parseInt(c2m3), parseInt(c3m3), parseInt(c4m3), parseFloat(Average3)],
        [m4, parseInt(c1m4), parseInt(c2m4), parseInt(c3m4), parseInt(c4m4), parseFloat(Average4)],
        [m5, parseInt(c1m5), parseInt(c2m5), parseInt(c3m5), parseInt(c4m5), parseFloat(Average5)],
        [m6, parseInt(c1m6), parseInt(c2m6), parseInt(c3m6), parseInt(c4m6), parseFloat(Average6)],
        [m7, parseInt(c1m7), parseInt(c2m7), parseInt(c3m7), parseInt(c4m7), parseFloat(Average7)],
        [m8, parseInt(c1m8), parseInt(c2m8), parseInt(c3m8), parseInt(c4m8), parseFloat(Average8)],
        [m9, parseInt(c1m9), parseInt(c2m9), parseInt(c3m9), parseInt(c4m9), parseFloat(Average9)],
        [m10, parseInt(c1m10), parseInt(c2m10), parseInt(c3m10), parseInt(c4m10), parseFloat(Average10)],
      ]);
    }
  }



  var options = {


    vAxis: { title: y },

    hAxis: { title: x },

    seriesType: 'bars',

    series: { 4: { type: 'line' } },

    legend: { position: 'none' }, 
    
    colors: ['#9ED78F','#6CB359', '#448F30', '#0F4800', '#4D6248']


  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}


function setTitle() {

  var x = document.getElementById("frm1");

  var text = "";

  var i;

  for (i = 0; i < x.length; i++) {

    text += x.elements[i].value + "<br>";
  }

  document.getElementById("title").innerHTML = text;
}


function setSubTitle() {

  var x = document.getElementById("frm2");

  var text = "";

  var i;

  for (i = 0; i < x.length; i++) {

    text += x.elements[i].value + "<br>";
  }

  document.getElementById("subtitle").innerHTML = text;
}
