window.addEventListener("load", function() {
    console.log("JS load");
    
    // MENU & MENU BURGER

    $('.burger').click(function(){
        $('.burger').toggleClass('active');
        $('.menu-burger').toggleClass('active-menu');
    });

    $('.logo img').click(function(){
        $(this).addClass('logo-animate');
        setTimeout(function(){
            $('.logo img').removeClass('logo-animate');
        },1000);
    });


    // START ANIMATION

    const pageLoad = true;
    // console.log(pageLoad);

    if(pageLoad){
        setTimeout(function(){
            $('.header-home').animate({top:0},"slow");
            $('#arrow-down').fadeIn();
            $('.loading h2').animate({opacity:1},"slow");
            $('.main-home').addClass('main-active');
            $('.footer-home').css('display','block');
            // main.classList.add('main-active');
            $('.loading').animate({zIndex:0},"slow");
        }, 2600);
    }
    else{
        $('.header-home').css('top',0);
        $('#arrow-down').fadeIn();
        $('.loading h2').animate({opacity:1},"slow");
        $('.main-home').addClass('main-active');
        $('.footer-home').css('display','block');
        // main.classList.add('main-active');
        $('#tom-svg path').animate({animation:'none'});
        $('.loading img').animate({ animation:'none'},function()
        {
            $('.loading').css('zIndex',0);
        });
    }

    // POP UP

    $('.about-cv button').click(function(){
        $('.pop-full-screen').toggleClass('pop-in');
    });

    $('.pop-full-screen .close-icon').click(function(){
        $('.pop-full-screen').toggleClass('pop-in');
    });

    // PROJECT FILTER

    $('.work-type-select button').click(function(){
        $(this).addClass('project-selected').siblings().removeClass('project-selected');
    });

    $('.project-list').click(function(){
        const projectFilter = $(this).attr('data-filter');
        console.log(projectFilter);
        if(projectFilter == 'all-project'){
            $('.work-project').css('display','block');
        }
        else{
            $('.work-project').not('.'+projectFilter).css('display','none');
            $('.work-project').filter('.'+projectFilter).css('display','block');
        }
    });
    $('.work-project a').click(function(){
        // pageLoad = false;
        // console.log(pageLoad);
        // const projectSlected = $(this).attr('data-filter');
        // setTimeout(function(){
        //     if ($('.project-container').attr('id')==projectSlected){
        //         $(this).css('display','grid');
        //         console.log($('.project-container').attr('id'));
        //     }
        // },1000);
    });
    
});