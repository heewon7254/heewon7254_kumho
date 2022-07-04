
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
        
        
        // $('.slide').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 2000,
        // });

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
            $(targetnews).fadeIn().siblings().hide();
            $(this).toggleClass('active').siblings().removeClass('active');
        });
        $('.business_content li:nth-child(3)').addClass('active');
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
        });//esg responsive slide

        let lastScrPos = 0;

        $(window).scroll(function(){
            let currentSct = $(this).scrollTop();
            if(currentSct == 0){
                $('body').removeClass('scroll-up');
            } 
            //스크롤 내리면
            if(currentSct >lastScrPos){
                $('body').removeClass('scroll-up');
                $('body').addClass('scroll-down');        
            } else if(currentSct < lastScrPos){ //스크롤 올리면
                $('body').removeClass('scroll-down');
                $('body').addClass('scroll-up');
                $('header').addClass('bg');
                if(currentSct == 0){
                    $('header').removeClass('bg'); 
                }
            }   

            lastScrPos = currentSct;   
        });

        let popup = document.querySelector('.popup');
        let popupCheckBox = document.querySelector('#popup');
        let popupClose = popup.querySelector('#close');

        //쿠키 생성 함수
        function setCookie(name,value,day){
            let date = new Date();
            date.setDate(date.getDate() + day);

            let cookieContent = '';
            cookieContent += `${name}=${value};`;
            cookieContent += `Expires=${date.toUTCString()}`;            

            document.cookie = cookieContent;
        }
        /*
        쿠키체크 
            쿠키 있다면 - 팝업이 안보인다.
            쿠키 없다면 - 팝업이 보인다.

        닫기 버튼을 클릭하면 할일
            하루안보기 체크안하고 닫으면 - 쿠키지운다.
            체크하고 닫으면 - 쿠키생성
        */


        //쿠키 확인 함수
        function getCookie(name){
            let visited = false;
            let cookies = document.cookie.split(';'); //문자열 ; 구분해서 배열 생성

            for(let cookie of cookies){
                if(cookie.indexOf(name) > -1){
                    visited = true;
                }
            }
            if(visited){
                popup.style.display = 'none'; //재방문
            }else{
                popup.style.display = 'block'; //첫방문, 안보기 체크안하고 닫기,
            }
        }        
        getCookie('ABC');

        //쿠키 삭제 함수
        function delCookie(name,value){           

            let date = new Date();
            date.setDate(date.getDate() - 1);

            let cookieContent = '';
            cookieContent += `${name}=${value};`;
            cookieContent += `Expires=${date.toUTCString()}`;            

            document.cookie = cookieContent;
        }            


        popupClose.addEventListener('click', ()=>{
            popup.style.display = 'none';
            if(popupCheckBox.checked){ //체크되었다면, 팝업을 다시 안보겠다, 쿠키생성
                setCookie('ABC','Main Page',1);
            }else{//체크x, 팝업을 다시 보겠다, 쿠키제거
                delCookie('ABC','Main Page');
            }
        });

});//document ready jquery 
    

