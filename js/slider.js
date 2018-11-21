$(document).ready(function() {
var movementStrength = 100;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$("#top-image").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 50;
          var newvalueY = height * pageY * -1 - 100;
          $('#top-image').css("background-position", newvalueX+"px     "+newvalueY+"px");
  
});
});
//Shrinking Nav
$(window).scroll(function() {
  if ($(document).scrollTop() > 40) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
// Slider

$('.inner').mousemove(function(e){
        
     var parentOffset = $(this).parent().offset();
        var x = (e.pageX - parentOffset.left); //offset -> method allows you to retrieve the current position of an element 'relative' to the document
        var y = (e.pageY - parentOffset.top);
        
        $(".left").css("width", x);
  $(".line").css("margin-left", x);
    
});
window.sr = ScrollReveal();
sr.reveal('.lemon', { 
  duration: 5000,
  reset: true,
  origin: 'bottom',
// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance: '100px',
  viewFactor: 0.4,

});
sr.reveal('.in-side', { 
  duration: 2000,
  reset: true,
  origin: 'left',
// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance: '200px',
  viewFactor: 0.4,
  scale: 1,
  easing: 'ease-in-out'

});
sr.reveal('.in-side-2', { 
  duration: 2000,
  reset: true,
  origin: 'left',
// Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
distance: '200px',
  viewFactor: 0.2,
  scale: 1,
  delay: 500,
  easing: 'ease-in-out',

});
/*
    Version 1.3.2
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowHeight = $(window).height();

        this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);

            $elem.each(function(){
                var $obj = $(this);
                // If class already exists; quit
                if ($obj.hasClass(options.classToAdd)){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round( $obj.offset().top ) + options.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(options.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    options.callbackFunction($obj);
                }
            });
        };

        // Run checkelements on load and scroll
        $(window).scroll(this.checkElements);
        this.checkElements();

        // On resize change the height var
        $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
        });
    };
})(jQuery);

$('.path').viewportChecker({
    classToAdd: 'visible',
repeat: true,
});