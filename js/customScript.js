$(document).ready(function(){
  $(window).scroll(function() { 
    if ($(document).scrollTop() > 150) { 
      $("#mainNav").css({"background-color": "#2f403c", "transition": "0.8s ease"}); 
    } else {
      $("#mainNav").css("background-color", "transparent"); 
    }
  });


  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    });


});
