
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
    
        $('.product_slide').slick({
            dots: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
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
                breakpoint: 620,
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


            if(winSCT > 800){
                $('.top').addClass('active');
            }
            else{
                $('.top').removeClass('active');
            }
            /* mini header
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
            $('html, body').animate({ scrollTop: 0 }, 400); //top button
        });



        AOS.init({
            offset: 300,
            once: true
        });    //aos

        $('.language').click(function(){
            $(this).text('eng');
        });  //language

        $('.recruit_con .text_area a').click(function(e){
            e.preventDefault();
            let targetImg=$(this).attr('href');
            $(targetImg).siblings().fadeOut();
            $(targetImg).fadeIn();             
        });
        
        $('.text_area a').eq(0).trigger('click'); //recruit tab

        //$(window).resize(function(){
 
            //if($(window).width()<=768){              
                //$('.esg_list').not('.slick-initialized').slick({
                    //dots: false,
                    //infinite: true,
                    //speed: 300,
                    //slidesToShow: 1
                //});
            //}
            //else{
                //$('.esg_list').slick('unslick'); 
               
            //}  
           
        //});
        //$(window).trigger('resize');// esg slide 'add' of null 오류 slick을 여러번 불러와서 발생한 문제

        let esgSlide = $('.esg_list');

        let esgOptions = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1
        };

        $(window).resize(function(){
            if($(window).width() <= 768){
                esgSlide.not('.slick-initialized').slick(esgOptions);
            }
            else{
                esgSlide.slick('unslick');
            }
        });

});//document ready jquery 
    

