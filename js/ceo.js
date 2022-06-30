$(function(){

    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true
    });
    // let ceoTab = $('.ceo_img a');

    // console.log(ceoTab);
    // ceoTab.click(function(e){
    //     e.preventDefault();
    //     let ceotarget = $(this).attr('href');
    //     console.log(ceotarget)
    //     $(ceotarget).show();
    // });
    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        showActiveTooltip: true, 
        navigation:true,
        anchors: ['firstPage', 'secondPage', '3rdPage','footer'],
        navigationTooltips:['ceo','greeting','profile','footer'],
    });

    // let ceoSlide = $('.greeting_content');
    
    // ceoSlide.slick({
    //     dots: false,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 1,
    //     fade: true,
    //     cssEase: 'linear'
    // });



    // let ceoOptions = {
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1
    // };

    // $(window).resize(function(){
    //     if($(window).width() <= 1300){
    //         ceoSlide.not('.slick-initialized').slick(ceoOptions);
    //     }
    //     else{
    //         ceoSlide.slick('unslick');
    //     }
    // });
    

    
});