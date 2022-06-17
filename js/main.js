
$(function(){
        var main = $('.slide').bxSlider({
            speed:1000,
            pager:false,
            autoControls: true,
            stopAutoOnClick: true,
            auto:true,
            onSliderLoad:function(currentIndex){
                console.log(currentIndex);
                $('.bar_wrap .slideinfo_list li').eq(currentIndex).addClass('active');
            },
            onSlideAfter:function(newIndex){
                console.log(newIndex); //현재 활성화된 슬라이드 번호
                main.stopAuto();
                $('.bar_wrap .slideinfo_list li').removeClass('active');
                $('.bar_wrap .slideinfo_list li').eq(newIndex).addClass('active');    
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

       $('.bar_wrap .slideinfo_list li').click(function(){
		    main.goToSlide($(this).index()); //pager 활성화
            $('.bar_wrap .slideinfo_list li').removeClass('active');
            $(this).addClass('active');
	    });

    
        var product = $('.product_slide').bxSlider({
            touchEnabled: false,
            pager:false,
            minSlides:1,
            maxSlides:4,
            moveSlides:1,
            slideWidth:270,
            slideMargin:72,
            // auto:true
        }); //product slide
        
        let productSelect = $('.select_menu').selectmenu();

        let productTab = $('.product_slide li a');

        productTab.click(function(e){
            e.preventDefault();
           let targetProduct =  $(this).attr('href');
           console.log(targetProduct);
           $('.products_desc > div').hide();
           $(targetProduct).fadeIn(800);
        });
        $('#item1').show();

        let newsTab = $('.business_content ul li');

        newsTab.click(function(e){
            e.preventDefault();
            let targetnews = $(this).find('a').attr('href');
            $(targetnews).toggleClass('active').fadeIn().siblings().hide();
        });
        $('#news_slide03').show(); //News Tab
        
        let counters = $('.com_info');
        let counterNums = counters.find('h3');


        let counterOST = counters.offset().top - 600;
        // let animationOST = $('.recruit .animate').offset().top - 600;
        //let recruitSCT = $('.recruit_list').offset().top - 700;
        console.log(counterOST);
        let excuted = false;

        $(window).scroll(function(){
            let winSCT = $(this).scrollTop();

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
            } // number animation

            // if(winSCT > recruitSCT){
            //     $('.recruit_list').addClass('active');
            // }

            if(winSCT > 800){
                $('.top').addClass('active');
            }
            else{
                $('.top').removeClass('active');
            }
            
            if(winSCT>100){
                 $('header').fadeOut();
                 $('.mini').addClass('active');
                 $('.mini').fadeIn();
            }
            else if(winSCT<=100){
                $('.mini').fadeOut();
                $('header').fadeIn(300);
            }
        });
        $('.menushow').click(function(e){
            e.preventDefault();
            // $('.mini').fadeOut();
            $('html, body').animate({ scrollTop: 0 }, 400);
        });

        $('.top').click(function(e){
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 400);
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

        AOS.init({
            offset: 300,
            // once: true
        });

        $('.language').click(function(){
            $(this).text('eng');
        });

        $('.text_area a').click(function(e){
            e.preventDefault();
            let targetImg=$(this).attr('href');
            $(targetImg).siblings().fadeOut();
            $(targetImg).fadeIn();
        });
        
        $('.text_area a').eq(0).trigger('click'); //recruit tab

});//document ready jquery 
    

