var canvas;
var context;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;

var itemName = ["China", "USA", "India", "Japan", "Germany", "Russia", "Indonesia", "Brazil", "Britain", "France", "Mexico", "Italy", "Turkey", "South Korea", "Spain"];
var itemValue = [25.2,    20.4,   10.4,    5.6,      4.3,      4.1,       3.5,        3.4,       3.0,      2.9,      2.6,      2.4,     2.3,       2.1,       1.9];

function init() {
    console.log("Javascript Accessible")

    sections = 15;
    //Val_max = 25;
    var itemVal_max = Math.max.apply(Math, itemValue)
    Val_max = Math.ceil(itemVal_max)
    var stepSize = 1;
    var columnSize = 50;
    var rowSize = 60;
    var margin = 5;
    var header = ""

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "rgb(0,250,100)"; //axis labels
    
    yScale = (canvas.height - columnSize - margin) / (Val_max);
    xScale = (canvas.width - rowSize) / (sections + 1);

    context.strokeStyle = "rgba(200,200,200,0.8)";
    context.beginPath();

    context.font = "19px 'Oswald', sans-serif;";
    context.fillText(header, 0, columnSize - margin);

    context.font = "16pt 'Oswald', sans-serif"
    var count = 0;
    for (scale = Val_max; scale >= 0; scale = scale - stepSize) {
        y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y)
        context.lineTo(canvas.width, y)
        count++;
    }
    context.stroke();

    context.font = "14pt 'Oswald', sans-serif";
    context.textBaseline = "bottom";
    for (i = 0; i < 15; i++) {
        computeHeight(itemValue[i]);
        context.fillText(itemName[i], xScale * (i + 1), y - margin);
    }

    // shadow for graph

    context.fillStyle = "#9933FF;";
    context.shadowColor = 'rgba(20, 20, 20, 0.5)';

    context.shadowOffsetX = 9;
    context.shadowOffsetY = 3;


    context.translate(0, canvas.height - margin);
    context.scale(xScale, -1 * yScale);

    for (i = 0; i < 15; i++) {
        context.fillRect(i + 1, 0, 0.3, itemValue[i]);
    }

}

function computeHeight(value) {
    y = canvas.height - value * yScale;
}

function change(){
    var country = document.querySelector("#country").value;
    var countryIndex;
    if (country == "China"){
        countryIndex = 0;
    } else if (country == "USA"){
        countryIndex = 1
    }else if (country == "India"){
        countryIndex = 2
    }else if (country == "Japan"){
        countryIndex = 3
    }else if (country == "Germany"){
        countryIndex = 4
    }else if (country == "Russia"){
        countryIndex = 5
    }else if (country == "Indonesia"){
        countryIndex = 6
    }else if (country == "Brazil"){
        countryIndex = 7
    }else if (country == "Britain"){
        countryIndex = 8
    }else if (country == "France"){
        countryIndex = 9
    }else if (country == "Mexico"){
        countryIndex = 10
    }else if (country == "Italy"){
        countryIndex = 11
    }else if (country == "Turkey"){
        countryIndex = 12
    }else if (country == "Southk"){
        countryIndex = 13
    }else if (country == "Spain"){
        countryIndex = 14
    } else console.log("Something is wrong with the Country Index");
    console.log("Country Index: " + countryIndex);
    var newValue = document.querySelector("#newValue").value;
    itemValue[countryIndex] = newValue;
    console.log("The item value is: ", itemValue[countryIndex]);

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();

}
