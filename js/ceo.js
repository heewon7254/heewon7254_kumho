$(function(){
    

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
        navigation:true,
        anchors: ['firstPage', 'secondPage', '3rdPage','footer'],
        navigationTooltips:['1','2','3','4']
    });
    

    
});