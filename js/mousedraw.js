var mousePressed = false;
var lastX, lastY;
var ctx;

function InitMouseDraw() {

    canvas = document.getElementById('drawCanvas');
    ctx = canvas.getContext("2d");

    $('#drawCanvas').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#drawCanvas').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#drawCanvas').mouseup(function (e) {
        mousePressed = false;
    });

    $('#drawCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;
}

function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function tictactoe(){
    ctx.strokeStyle = $('#selColor').val();
    ctx.lineWidth = $('#selWidth').val();
    ctx.beginPath;
    ctx.moveTo(333, 0);
    ctx.lineTo(333, 1000);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath;
    ctx.moveTo(667, 0);
    ctx.lineTo(667, 1000);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath;
    ctx.moveTo(0, 333);
    ctx.lineTo(1000, 333);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath;
    ctx.moveTo(0, 667);
    ctx.lineTo(1000, 667);
    ctx.closePath();
    ctx.stroke();
    }
    
 function tictactectoctoe(){
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.beginPath;
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 1000);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 1000);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(0, 200);
        ctx.lineTo(1000, 200);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(0, 400);
        ctx.lineTo(1000, 400);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(600, 0);
        ctx.lineTo(600, 1000);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(800, 0);
        ctx.lineTo(800, 1000);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(0, 600);
        ctx.lineTo(1000, 600);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath;
        ctx.moveTo(0, 800);
        ctx.lineTo(1000, 800);
        ctx.closePath();
        ctx.stroke();
        }