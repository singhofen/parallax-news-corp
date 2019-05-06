(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger-main").dropdown();
    $(".dropdown-trigger-mobile").dropdown();
    $('.modal').modal();
   

    $('input#input_text, textarea#textarea2').characterCounter();
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
    $('.tooltipped').tooltip({margin:20, outDuration:3760, inDuration:3700, transitionMovement:55});//sets margin from button. Must be in object to work
    $('.carousel').carousel();
    $('.collapsible').collapsible();
   
    $(document).ready(function(){
      $('.datepicker').datepicker();
     
    });
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true

    });
   
  }); // end of document ready
})(jQuery); // end of jQuery name space

//scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//onclick alert box for form submission
function myFunction() {
  alert(" Success!! Your Message Was Sent");
}