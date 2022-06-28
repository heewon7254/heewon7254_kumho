function makeMap(lat,lng){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = { 
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표 33.450701, 126.570667
            level: 3 // 지도의 확대 레벨
        };
    
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 
}

let tabMenu = $('.tab-menu li');
	let mapcontent = $('.mapcontent  > div');	

    tabMenu.click(function(e){
            e.preventDefault();
	
            tabMenu.removeClass('active');
            $(this).addClass('active');
            let t = $(this).find('a').attr('data-lat');
            let l = $(this).find('a').attr('data-lng');
            makeMap(t,l);

            let targetContent = $(this).find('a').attr('href');
            mapcontent.hide();
            $(targetContent).show();

    });
    tabMenu.eq(0).trigger('click');

    $('#changemap').change(function(){
        changeMap();
        
    });
    function changeMap(){
        let t = $('#changemap option:selected').attr('data-lat');
        let l = $('#changemap option:selected').attr('data-lng');
        makeMap(t,l);
    }
    changeMap();