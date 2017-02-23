var indexData = {};

$(document).ready(function(){
  $(window).scroll(function() { 
    if ($(document).scrollTop() > 150) { 
      $("#mainNav").css({"background-color": "#2f403c", "transition": "0.8s ease"}); 
    } else {
      $("#mainNav").css("background-color", "transparent"); 
    }
	});


  $('.btn').on('click', function(){
        $('#ifrm').attr('src', 'booking.html');
     indexData.title = $(this).parent().find('.tiTour').html();
   });
});
