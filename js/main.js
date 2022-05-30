
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
            onSlideAfter:function($slideElement){
                console.log($slideElement);
                if($slideElement == $('.bar_wrap .slideinfo_list li').eq($slideElement)){
                    $('.bar_wrap .slideinfo_list li').addClass('active').siblings().removeClass('active');
                }
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

       $('.bar_wrap .slideinfo_list li').click(function(){
		main.goToSlide($(this).index()); //pager 활성화
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
        
        let counters = $('.company_info');
        let counterNums = counters.find('h3');


        let counterOST = counters.offset().top - 600;
        // let animationOST = $('.recruit .animate').offset().top - 600;
        let recruitSCT = $('.recruit_list').offset().top - 700;
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
            }

            if(winSCT > recruitSCT){
                $('.recruit_list').addClass('active');
            }

            if(winSCT > 800){
                $('.top').addClass('active');
            }
            else{
                $('.top').removeClass('active');
            }

            /*
            if(winSCT > animationOST){
                $('.recruit .animate').addClass('animate__animated');
                $('.recruit .animate').addClass('animate__rubberBand');

            }
            */
        }); // number animation

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


});//document ready jquery 
    

