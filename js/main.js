//$(window).load(function()
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '.enjoy',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 



    var strength1 = 50;
var strength2 = 100;
var strength3 = 200;
$("html").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = 1* pageX * -1;
    var newvalueY = 1* pageY * -1;
    $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
    
});

});


   