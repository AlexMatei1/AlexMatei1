  $(window).load(function(){
    $('.preloader').fadeOut(1000);    
  });

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })

      function myFunction(){
        alert("Email send!");
      }