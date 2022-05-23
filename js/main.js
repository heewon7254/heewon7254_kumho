
$(function(){


    let header=$('header'),
        menu = header.find('nav>ul>li'),
        link = menu.find('a'),
        headerHeight = header.outerHeight(),
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
                console.log(width, height, left);

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
        });

        var main = $('.slide').bxSlider({
            speed:1000,
            pager:false,
            autoControls: true,
            stopAutoOnClick: true,
            auto:true,
            onSlideAfter:function(){
                main.stopAuto();
                main.startAuto();
            }
        });

        $('.stop').click(function(){
           $('.autoplay_btn').addClass('active');
           main.stopAuto();
       });
       $('.play').click(function(){
           $('.autoplay_btn').removeClass('active');
           main.startAuto();
       });

        var product = $('.product_slide').bxSlider({
            pager:false,
            minSlides:1,
            maxSlides:3,
            moveSlides:1,
            slideWidth:270,
            slideMargin:243
        });

        let image = $('.product_slide li img');
        console.log(image);

        image.click(function(){
           let targetProduct =  $(this).closest('a').attr('href');
           console.log(targetProduct);
           $(targetProduct).addClass('active');
        });

        let title = $('.product_slide li h3');

        title.click(function(){
            let showProduct = $(this).parent('a').attr('href');
            console.log(showProduct);
            $(showProduct).addClass('active');
        });
});
    

