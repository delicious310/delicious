requirejs.config({
    shim: {
        'jquery.lightbox': ['jquery']
    }
});
require(['jquery', 'jquery.lightbox'], function($){
    //导航栏

    var $header = $('#header'),
    $navIcon = $('.nav-icon', $header),
    $navCloseIcon = $('.nav-close-icon', $header),
    $navMenuBox =$('.nav-menu-box', $header);

   $navIcon.on('click', function(){
   	$navMenuBox.animate({top: 0});

    });
    $navCloseIcon.on('click', function(){
    	$navMenuBox.animate({top: -192});


    });

    //portfolio
    
    $('#portfolio li').hover(function(){
        $(this).children('img').stop().animate({
            width: 305,
            height: 193,
            marginLeft: -10,
            marginTop: -7
        });
        $(this).children('.mask').stop().show().animate({
            opacity: 0.84
        });
    }, function(){
        $(this).children('img').stop().animate({
            width: 285,
            height: 180,
            marginLeft: 0,
            marginTop: 0
        });
        $(this).children('.mask').stop().animate({
            opacity: 0
         
        });
    }).lightbox();
    









    // });
});