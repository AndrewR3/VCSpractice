var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var Albertsons = [100, 102, 87, , 100, 123, 100, 90, 87, 91, 93, 88];
var IdaCorp = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
var Micron = [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];

function init() {
    // set these values for your data 
    sections = 12;
    Val_max = 130;
    Val_min = -50;
    var stepSize = 10;
    var columnSize = 50;
    var rowSize = 100;
    var margin = 10;
    var xAxis = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "red" //Colored Graph Numbers
    context.font = "20 pt Verdana"

    yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
    xScale = (canvas.width - rowSize) / sections;

    context.strokeStyle = "rgb(6, 11, 86)"; // color of grid lines
    context.beginPath();
    // print Parameters on X axis, and grid lines on the graph
    for (i = 1; i <= sections; i++) {
        var x = i * xScale;
        context.fillText(xAxis[i], x, columnSize - margin);
        context.moveTo(x, columnSize);
        context.lineTo(x, canvas.height - margin);
    }
    // print row header and draw horizontal grid lines
    var count = 0;
    for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
        var y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y)
        context.lineTo(canvas.width, y)
        count++;
    }
    context.stroke();

    context.translate(rowSize, canvas.height + Val_min * yScale);
    context.scale(1, -1 * yScale);

    // Color of each dataplot items
    
    context.strokeStyle = "rgb(255,0,102)";
    plotData(Albertsons);
    context.strokeStyle = "rgb(153,51,255)";
    plotData(IdaCorp);
    context.strokeStyle = "rgb(255,255,255)";
    plotData(Micron);
}

function plotData(dataSet) {
    context.beginPath();
    context.moveTo(0, dataSet[0]);
    for (i = 1; i < sections; i++) {
        context.lineTo(i * xScale, dataSet[i]);
    }
    context.stroke();
}

function reGraph() {
    context.clearRect(-100, -100, 10000, 10000);

    console.log("Function reGraph has been initiated");
    var co = document.querySelector("#company").value;
    console.log("The selected Company is: " + co);
    var month = document.querySelector("#month").value;
    console.log("The selected month is: " + month);
    var profit = parseFloat(document.querySelector("#profit").value);
    console.log("The selected profit is: " + profit + " million dollars");
    var monthIndex;
    if (month === "January") {
        monthIndex = 0;
    } else if (month === "February") {
        monthIndex = 1;
    } else if (month === "March") {
        monthIndex = 2;
    } else if (month === "April") {
        monthIndex = 3;
    } else if (month === "May") {
        monthIndex = 4;
    } else if (month === "June") {
        monthIndex = 5;
    } else if (month === "July") {
        monthIndex = 6;
    } else if (month === "August") {
        monthIndex = 7;
    } else if (month === "September") {
        monthIndex = 8;
    } else if (month === "October") {
        monthIndex = 9;
    } else if (month === "November") {
        monthIndex = 10;
    } else if (month === "December") {
        monthIndex = 11;
    } else console.log("Something is wrong with the Month Index");
    console.log("Month Index: " + monthIndex);




    if (co === "Albertsons") {
        /* Erase graph stuff */
        //context.clearRect(0, 0, canvas.width, canvas.height);

        Albertsons[monthIndex] = profit;
        context.strokeStyle = "rgb(255,0,102)";
        plotData(Albertsons);
    }
    if (co === "Idacorp") {
        /* Erase graph stuff */
        //context.clearRect(0, 0, canvas.width, canvas.height);

        IdaCorp[monthIndex] = profit;
        context.strokeStyle = "rgb(153,51,255)";
        plotData(IdaCorp);
    }

    if (co === "Micron") {
        Micron[monthIndex] = profit;
        context.strokeStyle = "rgb(255,255,255)";
        plotData(Micron);
    }
    else console.log("Something went wrong");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
}