/**
 * BootsBuddy V4.4.1
 * Author: Shoaib Khan
 * Company: WebDecode
 * URL: http://www.webdecode.net
 * Last Updated At: Dec, 2019
 */

$(function () {
    $(window).resize(function(){
        responsive();
    });

    // Make Element Responsive (responsive())
    function responsive() {
        var rwd_16x9 = $('.res-16x9');
        var rwd_18x9 = $('.res-18x9');
        var rwd_9x16 = $('.res-9x16');
        var rwd_9x18 = $('.res-9x18');
        var rwd_square = $('.res-square');
        rwd_16x9.height((rwd_16x9.innerWidth() * 56.25) / 100);
        rwd_18x9.height((rwd_18x9.innerWidth() * 50) / 100);
        rwd_9x16.height(rwd_9x16.innerWidth() * 1.77);
        rwd_9x18.height(rwd_9x18.innerWidth() * 2);
        rwd_square.height(rwd_square.innerWidth());
    }
    responsive();

    $(".wave").click(function (e) {
        $(this).css({'overflow': 'hidden', 'position': 'relative'});
        // Remove any old one
        $(".ripple").remove();
      
        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).innerWidth(),
            buttonHeight =  $(this).innerHeight();
      
        // Add the element
        $(this).prepend("<span class='ripple'></span>");
      
      
       // Make it round!
        if(buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight; 
        }
      
        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;
      
      
        // Add the ripples CSS and start the animation
        $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");
    });
    
 
        

});


