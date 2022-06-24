$(function(){
    let header=$('header'),
    menu = header.find('nav>ul>li'),
    link = menu.find('a'),
    headerHeight = header.outerHeight(),
    headerStickyHeight = header.outerHeight(),
    newHeight=0,
    subMenu = menu.find('ul');


    if(!$('nav').hasClass('active')){
        subMenu.each(function(){
            if($(this).outerHeight() > newHeight){
                newHeight =$(this).outerHeight() + headerHeight;
            }
        });
    
        menu.hover(
            function(){
                header.stop().animate({height:newHeight});
            },
            function(){
                header.stop().animate({height:headerHeight});
            }
        );
        let aisideMenu = $('.main_menu > li');
        aisideMenu.click(function(){
            $(this).find('ul').slideToggle();
            $(this).siblings().find('ul').slideUp();
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
        });
    }

    
        menu.each(function(){
            $(this).mouseover(function(){
                let width = $(this).outerWidth();
                let height =$(this).outerHeight();
                let left = $(this).offset().left;
    
                $('.target').css({
                    width:`${width}px`,
                    top:`${height - 20}px`,
                    left:`${left}px`,
                    opacity:1
                })
            $(this).mouseout(function(){
                $('.target').css({opacity:0})
            });
            });
        }); //sub menu


        $('.hamburger-button').click(function(e){
        e.preventDefault();
        $('nav').toggleClass('active');
        $(this).toggleClass('active');
      });


});