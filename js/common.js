$(function(){
    let header=$('header'),
    menu = header.find('nav>ul>li'),
    link = menu.find('a'),
    headerHeight = header.outerHeight(),
    headerStickyHeight = header.outerHeight(),
    newHeight=0,
    subMenu = menu.find('ul');


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


    //     $('.hamburger-button').click(function(e){
    //     e.preventDefault();
    //     $('nav').toggleClass('active');
    //     $(this).toggleClass('active');
    //   });


    $('.menu').click(function(e){
        e.preventDefault();
        $('.toggle_wrap').toggleClass('active');
        $('body').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    let aisideMenu = $('.main_menu2 > li');

    aisideMenu.click(function(){
        if($(window).outerWidth()<=922){
            $(this).find('ul').slideToggle();
            $(this).siblings().find('ul').slideUp();
            $(this).toggleClass('active');
            $(this).siblings().removeClass('active');
        }
    });

      let searchIcon = $('.icon').find('.search');
      let modalWrap = $('.modal_wrap');

      searchIcon.click(function(){
          modalWrap.addClass('active');
          $('body').css({overflow:'hidden'});
      });

      modalWrap.find('.close').click(function(){
          modalWrap.removeClass('active');
          modalWrap.fadeOut();
      }); //search

      $('.logo').click(function(){
        location.href = 'index.html';
      });

      $('.language').click(function(){
        $(this).toggleClass('active');
    });  //language
});