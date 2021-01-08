// $(function() {
  function initMap(){
    const uluru = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
      });
      const marker = new google.maps.Marker({
        position: uluru,
        map: map,
      });
    // console.log(map);
  }
//   initMAP();
// });
$(function () {
  $(document).scroll(function () {
    var $header = $(".fixed-top");
     $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    // console.log($header);
  });
});
// bookmark button 
$( ".bookmark-link" ).click(function(e) {
  e.preventDefault();
  console.log( "You clicked a paragraph!" );
  $(".bookmark i").toggleClass('make-red');
});
//gallary script 
jQuery(document).ready(function($) {
  $('.image img').click(function(event) {

    // detect data-id for later
    var id = $(this).data('id');
    // grab src to replace #featured
    var src = $(this).attr('src');
    // set featured image
    var img = $('#featured img');

    img.fadeOut('fast', function() {
      $(this).attr({src: src,});
      $(this).fadeIn('fast');
    });
  });
});
// drop down script
$( document ).ready(function() {
  
});
