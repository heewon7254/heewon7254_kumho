$(function(){
    AOS.init({
        offset: 300,
        // once: true
    });

    let missionBar = $('.mission h2').offset().top - 700;

    $(window).scroll(function(){
        let winSCT = $(this).scrollTop();

        if(winSCT > missionBar){
            $('.mission h2').addClass('active');
        }
    });

});