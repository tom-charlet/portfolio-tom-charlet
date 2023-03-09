window.addEventListener("load", function () {
    console.log("JS load");

    // MENU & MENU BURGER

    $('.burger').click(function () {
        $('.burger').toggleClass('active');
        $('.menu-burger').toggleClass('active-menu');
    });

    $('.logo img').click(function () {
        $(this).addClass('logo-animate');
        setTimeout(function () {
            $('.logo img').removeClass('logo-animate');
        }, 1000);
    });


    // START ANIMATION

    const pageLoad = false;

    if (pageLoad) {
        setTimeout(function () {
            $('.header-home').animate({ top: 0 }, "slow");
            $('#arrow-down').fadeIn();
            $('.loading h2').animate({ opacity: 1 }, "slow");
            $('.main-home').addClass('main-active');
            $('.footer-home').css('display', 'block');
            // main.classList.add('main-active');
            $('.loading').animate({ zIndex: 0 }, "slow");
            $('#particles-js').delay(1000).animate({ opacity: 1 }, "slow");
        }, 2600);
    }
    else {
        $('.header-home').css('top', 0);
        $('#arrow-down').fadeIn();
        $('.loading h2').animate({ opacity: 1 }, "slow");
        $('.main-home').addClass('main-active');
        $('.footer-home').css('display', 'block');
        // main.classList.add('main-active');
        $('#tom-svg path').animate({ animation: 'none' });
        $('.loading img').animate({ animation: 'none' }, function () {
            $('.loading').css('zIndex', -1);
        });
    }

    // POP UP

    $('.about-cv button').click(function () {
        $('.pop-full-screen').toggleClass('pop-in');
    });

    $('.pop-full-screen .close-icon').click(function () {
        $('.pop-full-screen').toggleClass('pop-in');
    });

    // PROJECT FILTER

    $('.work-type-select button').click(function () {
        $(this).addClass('project-selected').siblings().removeClass('project-selected');
    });

    $('.project-list').click(function () {
        const projectFilter = $(this).attr('data-filter');
        console.log(projectFilter);
        if (projectFilter == 'all-project') {
            $('.work-project').css('display', 'block');
        }
        else {
            $('.work-project').not('.' + projectFilter).css('display', 'none');
            $('.work-project').filter('.' + projectFilter).css('display', 'block');
        }
    });

    // SCREEN HEIGHT

    const windowSize = $(window).height();
    console.log(windowSize);

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll < 0.8 * windowSize) {
            $('.btn-top').css({ bottom: -4 + 'em' }, "slow");
        }
        else {
            $('.btn-top').css({ bottom: 2 + 'em' }, "slow");
        }
    });

    // PARTICULES 

    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 16,
                    "density": {
                        "enable": true,
                        "value_area": 3531.771609986054
                    }
                },
                "color": {
                    "value": "#a52a2a"
                },
                "shape": {
                    "type": "polygon",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 4
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5050747991726396,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.2979178340276591,
                        "sync": false
                    }
                },
                "size": {
                    "value": 48.10236182596568,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 38.36163836163836,
                        "size_min": 33.56643356643357,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 1202.559045649142,
                        "rotateY": 1202.559045649142
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": false
        }

    );
});