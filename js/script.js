$(function(){
    $('#nav-btn').on('click' ,function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$('a[href^="#"]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

$('#nav a[href]').on('click', function(event) {
    $('#nav-btn').trigger('click');
});


AOS.init()