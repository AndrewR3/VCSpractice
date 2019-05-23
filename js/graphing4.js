var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var Diastolic = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
var Systolic = [33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33];
var Glucose = [55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55];
var PulseOx = [66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66];
var Wellness = [111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111,111];

function init() {
    // set these values for your data 
    sections = 31;
    Val_max = 220;
    Val_min = 0;
    var stepSize = 10;
    var columnSize = 10;
    var rowSize = 100;
    var margin = 10;
    var xAxis = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];


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

    context.strokeStyle = "rgb(110, 3, 3)";
    plotData(Systolic);
    context.strokeStyle = "rgb(10, 3, 110)";
    plotData(Diastolic);
    context.strokeStyle = "rgb(2, 78, 18)";
    plotData(Glucose);
    context.strokeStyle = "rgb(255, 197, 6)";
    plotData(PulseOx);
    context.strokeStyle = "rgb(115, 2, 243)";
    plotData(Wellness);
    

}

function plotData(dataSet) {
    context.beginPath();
    context.moveTo(0, dataSet[0]);
    for (i = 1; i < sections; i++) {
        context.lineTo(i * xScale, dataSet[i]);
    }
    context.stroke();
}
function regraph(){
    console.log("The regraphing function has been initiated");
    Systolic[0] = parseInt(document.getElementById("s1").value);
    Systolic[1] = parseInt(document.getElementById("s2").value);
    Systolic[2] = parseInt(document.getElementById("s3").value);
    Systolic[3] = parseInt(document.getElementById("s4").value);
    Systolic[4] = parseInt(document.getElementById("s5").value);
    Systolic[5] = parseInt(document.getElementById("s6").value);
    Systolic[6] = parseInt(document.getElementById("s7").value);
    Systolic[7] = parseInt(document.getElementById("s8").value);
    Systolic[8] = parseInt(document.getElementById("s9").value);
    Systolic[9] = parseInt(document.getElementById("s10").value);
    Systolic[10] = parseInt(document.getElementById("s11").value);
    Systolic[11] = parseInt(document.getElementById("s12").value);
    Systolic[12] = parseInt(document.getElementById("s13").value);
    Systolic[13] = parseInt(document.getElementById("s14").value);
    Systolic[14] = parseInt(document.getElementById("s15").value);
    Systolic[15] = parseInt(document.getElementById("s16").value);
    Systolic[16] = parseInt(document.getElementById("s17").value);
    Systolic[17] = parseInt(document.getElementById("s18").value);
    Systolic[18] = parseInt(document.getElementById("s19").value);
    Systolic[19] = parseInt(document.getElementById("s20").value);
    Systolic[20] = parseInt(document.getElementById("s21").value);
    Systolic[21] = parseInt(document.getElementById("s22").value);
    Systolic[22] = parseInt(document.getElementById("s23").value);
    Systolic[23] = parseInt(document.getElementById("s24").value);
    Systolic[24] = parseInt(document.getElementById("s25").value);
    Systolic[25] = parseInt(document.getElementById("s26").value);
    Systolic[26] = parseInt(document.getElementById("s27").value);
    Systolic[27] = parseInt(document.getElementById("s28").value);
    Systolic[28] = parseInt(document.getElementById("s29").value);
    Systolic[29] = parseInt(document.getElementById("s30").value);
    Systolic[30] = parseInt(document.getElementById("s31").value);

    console.log("Changing Systolic", Systolic.toString());

    Diastolic[0] = parseInt(document.getElementById("d1").value);
    Diastolic[1] = parseInt(document.getElementById("d2").value);
    Diastolic[2] = parseInt(document.getElementById("d3").value);
    Diastolic[3] = parseInt(document.getElementById("d4").value);
    Diastolic[4] = parseInt(document.getElementById("s5").value);
    Diastolic[5] = parseInt(document.getElementById("d6").value);
    Diastolic[6] = parseInt(document.getElementById("d7").value);
    Diastolic[7] = parseInt(document.getElementById("d8").value);
    Diastolic[8] = parseInt(document.getElementById("d9").value);
    Diastolic[9] = parseInt(document.getElementById("d10").value);
    Diastolic[10] = parseInt(document.getElementById("d11").value);
    Diastolic[11] = parseInt(document.getElementById("d12").value);
    Diastolic[12] = parseInt(document.getElementById("d13").value);
    Diastolic[13] = parseInt(document.getElementById("d14").value);
    Diastolic[14] = parseInt(document.getElementById("d15").value);
    Diastolic[15] = parseInt(document.getElementById("d16").value);
    Diastolic[16] = parseInt(document.getElementById("d17").value);
    Diastolic[17] = parseInt(document.getElementById("d18").value);
    Diastolic[18] = parseInt(document.getElementById("d19").value);
    Diastolic[19] = parseInt(document.getElementById("d20").value);
    Diastolic[20] = parseInt(document.getElementById("d21").value);
    Diastolic[21] = parseInt(document.getElementById("d22").value);
    Diastolic[22] = parseInt(document.getElementById("d23").value);
    Diastolic[23] = parseInt(document.getElementById("d24").value);
    Diastolic[24] = parseInt(document.getElementById("d25").value);
    Diastolic[25] = parseInt(document.getElementById("d26").value);
    Diastolic[26] = parseInt(document.getElementById("d27").value);
    Diastolic[27] = parseInt(document.getElementById("d28").value);
    Diastolic[28] = parseInt(document.getElementById("d29").value);
    Diastolic[29] = parseInt(document.getElementById("d30").value);
    Diastolic[30] = parseInt(document.getElementById("d31").value);

    console.log("Changing Diastolic", Diastolic.toString());
    
    Glucose[0] = parseInt(document.getElementById("g1").value);
    Glucose[1] = parseInt(document.getElementById("g2").value);
    Glucose[2] = parseInt(document.getElementById("g3").value);
    Glucose[3] = parseInt(document.getElementById("g4").value);
    Glucose[4] = parseInt(document.getElementById("g5").value);
    Glucose[5] = parseInt(document.getElementById("g6").value);
    Glucose[6] = parseInt(document.getElementById("g7").value);
    Glucose[7] = parseInt(document.getElementById("g8").value);
    Glucose[8] = parseInt(document.getElementById("g9").value);
    Glucose[9] = parseInt(document.getElementById("g10").value);
    Glucose[10] = parseInt(document.getElementById("g11").value);
    Glucose[11] = parseInt(document.getElementById("g12").value);
    Glucose [12] = parseInt(document.getElementById("g13").value);
    Glucose [13] = parseInt(document.getElementById("g14").value);
    Glucose[14] = parseInt(document.getElementById("g15").value);
    Glucose [15] = parseInt(document.getElementById("g16").value);
    Glucose [16] = parseInt(document.getElementById("g17").value);
    Glucose [17] = parseInt(document.getElementById("g18").value);
    Glucose [18] = parseInt(document.getElementById("g19").value);
    Glucose[19] = parseInt(document.getElementById("g20").value);
    Glucose[20] = parseInt(document.getElementById("g21").value);
    Glucose [21] = parseInt(document.getElementById("g22").value);
    Glucose [22] = parseInt(document.getElementById("g23").value);
    Glucose [23] = parseInt(document.getElementById("g24").value);
    Glucose [24] = parseInt(document.getElementById("g25").value);
    Glucose [25] = parseInt(document.getElementById("g26").value);
    Glucose [26] = parseInt(document.getElementById("g27").value);
    Glucose [27] = parseInt(document.getElementById("g28").value);
    Glucose [28] = parseInt(document.getElementById("g29").value);
    Glucose [29] = parseInt(document.getElementById("g30").value);
    Glucose [30] = parseInt(document.getElementById("g31").value);

    console.log("Changing Glucose", Glucose.toString());
    

    PulseOx[0] = parseInt(document.getElementById("p1").value);
    PulseOx[1] = parseInt(document.getElementById("p2").value);
    PulseOx[2] = parseInt(document.getElementById("p3").value);
    PulseOx[3] = parseInt(document.getElementById("p4").value);
    PulseOx[4] = parseInt(document.getElementById("p5").value);
    PulseOx[5] = parseInt(document.getElementById("p6").value);
    PulseOx[6] = parseInt(document.getElementById("p7").value);
    PulseOx[7] = parseInt(document.getElementById("p8").value);
    PulseOx[8] = parseInt(document.getElementById("p9").value);
    PulseOx[9] = parseInt(document.getElementById("p10").value);
    PulseOx[10] = parseInt(document.getElementById("p11").value);
    PulseOx [11] = parseInt(document.getElementById("p12").value);
    PulseOx [12] = parseInt(document.getElementById("p13").value);
    PulseOx [13] = parseInt(document.getElementById("p14").value);
    PulseOx [14] = parseInt(document.getElementById("p15").value);
    PulseOx [15] = parseInt(document.getElementById("p16").value);
    PulseOx [16] = parseInt(document.getElementById("p17").value);
    PulseOx [17] = parseInt(document.getElementById("p18").value);
    PulseOx [18] = parseInt(document.getElementById("p19").value);
    PulseOx [19] = parseInt(document.getElementById("p20").value);
    PulseOx [20] = parseInt(document.getElementById("p21").value);
    PulseOx [21] = parseInt(document.getElementById("p22").value);
    PulseOx [22] = parseInt(document.getElementById("p23").value);
    PulseOx [23] = parseInt(document.getElementById("p24").value);
    PulseOx [24] = parseInt(document.getElementById("p25").value);
    PulseOx [25] = parseInt(document.getElementById("p26").value);
    PulseOx [26] = parseInt(document.getElementById("p27").value);
    PulseOx [27] = parseInt(document.getElementById("p28").value);
    PulseOx [28] = parseInt(document.getElementById("p29").value);
    PulseOx[29] = parseInt(document.getElementById("p30").value);
    PulseOx[30] = parseInt(document.getElementById("p31").value);

    console.log("Changing Pulse Ox", PulseOx.toString());

    Wellness[0] = parseInt(document.getElementById("w1").value);
    Wellness [1] = parseInt(document.getElementById("w2").value);
    Wellness[2] = parseInt(document.getElementById("w3").value);
    Wellness [3] = parseInt(document.getElementById("w4").value);
    Wellness [4] = parseInt(document.getElementById("w5").value);
    Wellness [5] = parseInt(document.getElementById("w6").value);
    Wellness [6] = parseInt(document.getElementById("w7").value);
    Wellness [7] = parseInt(document.getElementById("w8").value);
    Wellness [8] = parseInt(document.getElementById("w9").value);
    Wellness [9] = parseInt(document.getElementById("w10").value);
    Wellness [10] = parseInt(document.getElementById("w11").value);
    Wellness [11] = parseInt(document.getElementById("w12").value);
    Wellness [12] = parseInt(document.getElementById("w13").value);
    Wellness [13] = parseInt(document.getElementById("w14").value);
    Wellness [14] = parseInt(document.getElementById("w15").value);
    Wellness [15] = parseInt(document.getElementById("w16").value);
    Wellness [16] = parseInt(document.getElementById("w17").value);
    Wellness [17] = parseInt(document.getElementById("w18").value);
    Wellness[18] = parseInt(document.getElementById("w19").value);
    Wellness [19] = parseInt(document.getElementById("w20").value);
    Wellness [20] = parseInt(document.getElementById("w21").value);
    Wellness [21] = parseInt(document.getElementById("w22").value);
    Wellness [22] = parseInt(document.getElementById("w23").value);
    Wellness [23] = parseInt(document.getElementById("w24").value);
    Wellness  [24] = parseInt(document.getElementById("w25").value);
    Wellness [25] = parseInt(document.getElementById("w26").value);
    Wellness [26] = parseInt(document.getElementById("w27").value);
    Wellness [27] = parseInt(document.getElementById("w28").value);
    Wellness [28] = parseInt(document.getElementById("w29").value);
    Wellness [29] = parseInt(document.getElementById("w30").value);
    Wellness [30] = parseInt(document.getElementById("w31").value);
    
    console.log("Changing Wellness", Wellness.toString());
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    init();
}
