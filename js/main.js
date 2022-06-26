
$(function(){
        let bar = $('.bar_wrap .slideinfo_list li');
       
        var main = $('.slide').bxSlider({
            speed:700,
            pager:false,
            autoControls: true,
            stopAutoOnClick: true,
            auto:true,
            onSliderLoad:function(currentIndex){
                console.log(currentIndex);
                bar.eq(currentIndex).addClass('active');
            },
            onSlideAfter:function($slideElement, oldIndex, newIndex){
                console.log(newIndex); //현재 활성화된 슬라이드 번호
                main.stopAuto();
                bar.removeClass('active');
                bar.eq(newIndex).addClass('active');    
            }
        }); //main slide
        /*
        $('.slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          });
          */
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
    
        /*var product = $('.product_slide').bxSlider({
            touchEnabled: false,
            pager:false,
            minSlides:1,
            maxSlides:4,
            moveSlides:1,
            slideWidth:270,
            slideMargin:72,
            // auto:true
        }); //product slide
        */
        $('.product_slide').slick({
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,
            responsive: [
              {
                breakpoint: 1320,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 937,
                settings: {
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 630,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
        
        let productSelect = $('.select').selectmenu(); //product select menu

        let productTab = $('.product_slide li a');

        productTab.click(function(e){
            e.preventDefault();
           let targetProduct =  $(this).attr('href');
           console.log(targetProduct);
           $('.products_desc > div').hide();
           $(targetProduct).fadeIn(800);
        });
        $('#item1').show();//product tab

        let newsTab = $('.business_content li');

        newsTab.click(function(e){
            e.preventDefault();
            let targetnews = $(this).find('a').attr('href');
            $(targetnews).toggleClass('active').fadeIn().siblings().hide();
        });
        $('#news_slide03').show(); //News Tab
        
        let counters = $('.com_info');
        let counterNums = counters.find('h3');


        let counterOST = counters.offset().top - 600;

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
            /*
            if($(window).width()>=922){
                if(winSCT>100){
                    $('header').fadeOut();
                    $('.mini').addClass('active');
                    $('.mini').fadeIn();
                }
                else if(winSCT<=100){
                    $('.mini').fadeOut();
                    $('header').fadeIn(300);
                }
            }
            */
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



        AOS.init({
            offset: 300,
            // once: true
        });

        $('.language').click(function(){
            $(this).text('eng');
        });

        $('.recruit_con .text_area a').click(function(e){
            e.preventDefault();
            let targetImg=$(this).attr('href');
            $(targetImg).siblings().fadeOut();
            $(targetImg).fadeIn();
        });
        
        $('.text_area a').eq(0).trigger('click'); //recruit tab

        if($(window).width()<=768){
            $('.esg_list').addClass('active');

        }
        else{
            $('esg_list').removeClass('active');            
            $('esg_list').removeClass('slick-initialized');            
            $('esg_list').removeClass('slick-slider');          
        }


        if($('.esg_list').hasClass('active')){
            $('.esg_list').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });
        }


});//document ready jquery 
    

