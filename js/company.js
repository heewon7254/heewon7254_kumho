$(function(){
    let question = $('.info_list .question');

    question.click(function(){
        $(this).parent('.qna').toggleClass('active');
    });

    $( "#accordion" ).accordion({
        collapsible: true
    });

    $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation:true,
        showActiveTooltip: true, 
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage','5rdPage','6rdPage','footer'],
        navigationTooltips:['About Us','Slogan','Change','Trust','Environment','Information','Footer']
    });

});