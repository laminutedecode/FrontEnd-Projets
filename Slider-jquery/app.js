$(document).ready(function(){
    $('.dot-1').click(function(){
        $(".img-1").css('margin-left', "0");
    });
    $('.dot-2').click(function(){
        $('.img-1').css('margin-left', "-20%");
    });
    $('.dot-3').click(function(){
        $('.img-1').css('margin-left', "-40%");
    });
    $('.dot-4').click(function(){
        $('.img-1').css('margin-left', "-60%");
    });
    $('.dot-5').click(function(){
        $('.img-1').css('margin-left', "-80%");
    });
    $('.dot').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
})