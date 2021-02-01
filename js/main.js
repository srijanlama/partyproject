// $(function() {
function initMap() {
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
    $header.toggleClass("scrolled", $(this).scrollTop() > $header.height());
    // console.log($header);
  });
});
// bookmark button
$(".bookmark-link").click(function (e) {
  e.preventDefault();
  console.log("You clicked a paragraph!");
  $(".bookmark i").toggleClass("make-red");
});
//gallary script
jQuery(document).ready(function ($) {
  $(".image img").click(function (event) {
    // detect data-id for later
    var id = $(this).data("id");
    // grab src to replace #featured
    var src = $(this).attr("src");
    // set featured image
    var img = $("#featured img");

    img.fadeOut("fast", function () {
      $(this).attr({ src: src });
      $(this).fadeIn("fast");
    });
  });
});
// drop down script
// $( document ).ready(function() {
//     $(".nav-item").hover(function(){
//       $(this).find('ul').first().stop().toggle(200);
//     }, function(){
//       $(this).find('ul').stop().hide(200);
//     });
// });
$(document).ready(function () {
  $(".nav-item").hover(
    function () {
      $(this).children(".custom-dropdown-menu").slideDown(200);
    },
    function () {
      $(this).children(".custom-dropdown-menu").slideUp(200);
    }
  );

  $(".custom-dropdown-menu").hover(function () {
    $(this).toggleClass("reveal");
  });
});

// searched when focused
$("#searchByKeyword").focus(function () {
  $(".list-element").show();
  let results = [
    {
      id: "1",
      name: "A/V Equipment (1)",
    },
    {
      id: "2",
      name: "Acoustic Musicians (2)",
    },
    {
      id: "3",
      name: "Amusement Rides (3)",
    },
    {
      id: "4",
      name: "Animals (4)",
    },
    {
      id: "5",
      name: "Artists (5)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
    {
      id: "6",
      name: "Bakers (6)",
    },
  ];

  // <li class="list-element-item active"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  // <li class="list-element-item"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  // <li class="list-element-item"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  // <li class="list-element-item"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  // <li class="list-element-item"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  // <li class="list-element-item"><a href=""><i class="fas fa-tags"></i>A/V Equipment (1)</a></li>
  let output = "";

  $.each(results, function (index, value) {
    // console.log(value);
    output += `<li class="list-element-item active"><a href=""><i class="fas fa-tags"></i>${value.name}`;
    output += "</a></li>";
  });
  console.log(output);
  $(".list-element").html(output);
});

$("#searchByKeyword").keyup(function (eventData) {
  // let input = $(this).val();
  // let minchar = 0;
  // let data = [];
  $.ajax({
    type: "GET",
    url: "../results/results.json",
    dataType: "json",
    success: function (res) {
      results = res.name;
    },
  });
});

// carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
  });
});
