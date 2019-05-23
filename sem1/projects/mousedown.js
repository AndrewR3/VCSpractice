$(document).ready(function(){
  $('#mouseMe').mousedown(function(event){

    switch (event.which){
      case 1:
alert('Left mouse button was pressed!');
        break;
      case 2:
alert('Middle mouse button was pressed!');
        break;
      case 3:
alert('Right mouse button was pressed!');
        break;
      default:
        alert('OOPS! Something went wrong...');
      }
  });
  $(".myClass").mousedown(function(event) {
    switch (event.which) {
        case 1:
          $(this).addClass("greenCell");
          break;
        case 2:
          $(this).addClass("redCell");
          break;
        case 3:
          $(this).removeClass("greenCell");
          $(this).removeClass("redCell");
          break;
        default: alert("Something went wrong! Are you using a Gaming Mouse?");


    }
  });
  $(".class2").mousedown(function(event) {
    switch (event.which) {
        case 1:
          $(this).addClass("greenCell");
          break;
        case 2:
          $(this).addClass("redCell");
          break;
        case 3:
          $(this).removeClass("greenCell");
          $(this).removeClass("redCell");
          break;
        default: alert("Something went wrong! Are you using a Gaming Mouse?");


    }
  });

});
