let header=$('header'),
    menu = header.find('nav>.main_menu>li'),
    headerHeight = header.outerHeight(),
    newHeight=0,
    subMenu = menu.find('ul');
    console.log(subMenu);

    
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

