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

function tableGraph(){
    console.log("You have started the function Update Table!");

Albertsons[0] = parseInt(document.getElementById("a0").value);
Albertsons[1] = parseInt(document.getElementById("a1").value);
Albertsons[2] = parseInt(document.getElementById("a2").value);
Albertsons[3] = parseInt(document.getElementById("a3").value);
Albertsons[4] = parseInt(document.getElementById("a4").value);
Albertsons[5] = parseInt(document.getElementById("a5").value);
Albertsons[6] = parseInt(document.getElementById("a6").value);
Albertsons[7] = parseInt(document.getElementById("a7").value);
Albertsons[8] = parseInt(document.getElementById("a8").value);
Albertsons[9] = parseInt(document.getElementById("a9").value);
Albertsons[10] = parseInt(document.getElementById("a10").value);
Albertsons[11] = parseInt(document.getElementById("a11").value);

console.log("Changing Albertsons", Albertsons.toString());
IdaCorp[0] = parseInt(document.getElementById("i0").value);
IdaCorp[1] = parseInt(document.getElementById("i1").value);
IdaCorp[2] = parseInt(document.getElementById("i2").value);
IdaCorp[3] = parseInt(document.getElementById("i3").value);
IdaCorp[4] = parseInt(document.getElementById("i4").value);
IdaCorp[5] = parseInt(document.getElementById("i5").value);
IdaCorp[6] = parseInt(document.getElementById("i6").value);
IdaCorp[7] = parseInt(document.getElementById("i7").value);
IdaCorp[8] = parseInt(document.getElementById("i8").value);
IdaCorp[9] = parseInt(document.getElementById("i9").value);
IdaCorp[10] = parseInt(document.getElementById("i10").value);
IdaCorp[11] = parseInt(document.getElementById("i11").value);

console.log("Changing IdaCorp", IdaCorp.toString());
Micron[0] = parseInt(document.getElementById("m0").value);
Micron[1] = parseInt(document.getElementById("m1").value);
Micron[2] = parseInt(document.getElementById("m2").value);
Micron[3] = parseInt(document.getElementById("m3").value);
Micron[4] = parseInt(document.getElementById("m4").value);
Micron[5] = parseInt(document.getElementById("m5").value);
Micron[6] = parseInt(document.getElementById("m6").value);
Micron[7] = parseInt(document.getElementById("m7").value);
Micron[8] = parseInt(document.getElementById("m8").value);
Micron[9] = parseInt(document.getElementById("m9").value);
Micron[10] = parseInt(document.getElementById("m10").value);
Micron[11] = parseInt(document.getElementById("m11").value);

console.log("Changing Micron", Micron.toString());

console.log("Something went wrong");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
}