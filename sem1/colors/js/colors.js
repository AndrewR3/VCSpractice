$(document).ready(function(){

    $('#aboutMe').hide();

  $('#myName').click(function() {
$('#aboutMe').toggle(400);

});
$("#changeText").mouseenter(function(){
        $("#changeText").addClass("textChange");
    });
    $("#changeText").mouseleave(function(){
        $("#changeText").removeClass("textChange");
    });

    });
