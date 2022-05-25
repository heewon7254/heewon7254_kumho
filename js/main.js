
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
        }); //sub menu

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
        }); //main slide

        $('.stop').click(function(){
           $('.autoplay_btn').addClass('active');
           main.stopAuto();
       });
       $('.play').click(function(){
           $('.autoplay_btn').removeClass('active');
           main.startAuto();
       }); // main slide stop, play button

        var product = $('.product_slide').bxSlider({
            touchEnabled: false,
            pager:false,
            minSlides:1,
            maxSlides:3,
            moveSlides:1,
            slideWidth:270,
            slideMargin:243
        }); //product slide


        let productTab = $('.product_slide li a');
        console.log(productTab);
        productTab.click(function(e){
            e.preventDefault();
           let targetProduct =  $(this).attr('href');
           console.log(targetProduct);
           $('.products_desc > div').hide();
           $(targetProduct).fadeIn();
        });
/*
        let productTitle = $('.product_slide li h3');

        productTitle.click(function(){
            let showProduct = $(this).parent('a').attr('href');
            $(showProduct).addClass('active');
        }); //product tab
 */     

        let newsTab = $('.business_content ul li');

        newsTab.click(function(e){
            e.preventDefault();
            let targetnews = $(this).find('a').attr('href');
            $(targetnews).toggleClass('active').fadeIn().siblings().hide();
        });
        $('#news_slide03').show(); //News Tab
        
        let counters = $('.company_info');
        let counterNums = counters.find('h3');


        let counterOST = counters.offset().top - 600;
        let excuted = false;

        $(window).scroll(function(){
            let winSCT = $(window).scrollTop();

            if(winSCT > counterOST){
                counterNums.each(function(){
                    let $this = $(this),
                    targetNum = $this.attr('data-target');

                    $({num:$this.text()}).animate({num:targetNum},
                        {
                            duration:2000,
                            easing:'linear',
                            progress:function(){
                                $this.text(Math.floor(this.num));
                            }
                        }
                    );
                });
            }
        }); // number animation

        let searchIcon = $('.icon').find('.search');
        let modalWrap = $('.modal_wrap');

        searchIcon.click(function(){
            modalWrap.toggleClass('active');
            body.css({overflow:'hidden'});
        });
        modalWrap.find('.close').click(function(){
            modalWrap.fadeOut();
        }); //search
});//document ready jquery 
    

