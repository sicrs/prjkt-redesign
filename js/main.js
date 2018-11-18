window.onload = () => {
    init()
}

window.onscroll = () => {
    if (isElementInViewport(document.querySelector('.title')) === true) {
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active')
        }
        /*
        if (!document.body.classList.contains('animating')) {
            anime({
                targets: '.mdc-top-app-bar__title',
                color: '#FFF',
                begin: function(anim) {
                    document.body.classList.add('animating');
                },
            });
            anime({
                targets: '.animatables',
                color: '#000',
                backgroundColor: '#FFF',
                duration: 150,
                easing: 'linear',
                complete: function(anim) {
                    document.body.classList.remove('animating');
                }
            });
            document.body.classList.remove('theme-secondary');
            document.body.classList.add('theme-primary');
        } else {
            //nothing
        }
        */
        document.body.classList.remove('theme-secondary');
        document.querySelector('.projects-button').classList.remove('active')
        document.querySelector('.mdc-top-app-bar__title').classList.add('invisible')
    } else {
        document.querySelector('.mdc-top-app-bar__title').classList.remove('invisible')
        if (isElementInViewport(document.querySelector('.projects-header')) === true) {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            document.querySelector('.projects-button').classList.add('active');
            /*
            if (!document.body.classList.contains('animating')) {
                anime({
                    targets: '.mdc-top-app-bar__title',
                    color: '#FFF',
                    begin: function(anim) {
                        document.body.classList.add('animating');
                    }
                });
                anime({
                    targets: '.animatables',
                    color: '#FFF',
                    backgroundColor: '#000',
                    duration: 150,
                    easing: 'linear',
                    complete: function(anim) {
                        document.body.classList.remove('animating');
                    }
                });
                document.body.classList.remove('theme-primary');
                document.body.classList.add('theme-secondary');
            } else {
                //nothing
            }
            */
           document.body.classList.remove('theme-primary');
           document.body.classList.add('theme-secondary');
            
        } else if (isElementInViewport(document.querySelector('.about-header'))) {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            document.querySelector('.about-button').classList.add('active');
            /*
            if (!document.body.classList.contains('animating')) {
                anime({
                    targets: '.mdc-top-app-bar__title',
                    color: '#000',
                    begin: function(anim) {
                        document.body.classList.add('animating');
                    },
                });
                anime({
                    targets: '.animatables',
                    color: '#000',
                    backgroundColor: '#FFF',
                    duration: 150,
                    easing: 'linear',
                    complete: function(anim) {
                        document.body.classList.remove('animating');
                    }
                });
                document.body.classList.remove('theme-secondary');
                document.body.classList.add('theme-primary');
            } else {
                //nothing
            }
            */
            let select = document.querySelectorAll('.about-special');
            let i = 0;
            function loop() {
                setTimeout(function () {
                    select[i].classList.add('about-special-selected');
                    i ++;
                    if (i < select.length) {
                        loop()
                    };
                }, 25)
            }
            if (!select[0].classList.contains('about-special-selected')) {
                loop()
            }
            
            document.body.classList.remove('theme-secondary');
            document.body.classList.remove('theme-tertiary');
            document.body.classList.add('theme-primary');
        } else if (isElementInViewport(document.querySelector('.team-header'))) {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            document.querySelector('.team-button').classList.add('active');
            document.body.classList.remove('theme-primary');
            document.body.classList.remove('theme-secondary');
            document.body.classList.add('theme-tertiary');
        }
    }
};

const init = () => {
    //instantiate top-app-bar
    const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
    //instantiate buttons and links
    let buttons = document.querySelectorAll('.mdc-button')
    for (let i = 0; i < buttons.length; i++) {
        mdc.ripple.MDCRipple.attachTo(buttons[i])
    }

    let links = document.querySelectorAll('.mdc-icon-button')
    for (let i = 0; i < links.length; i++) {
        mdc.ripple.MDCRipple.attachTo(links[i]);
    }

    let cards = document.querySelectorAll('.mdc-card')
    for (let i = 0; i < cards.length; i++) {
        mdc.ripple.MDCRipple.attachTo(cards[i]);
    }
    document.querySelector('.projects-button').addEventListener('click', (e) => {
        document.querySelector('.projects').scrollIntoView({behavior: 'smooth', block: 'start'});
    })
    document.querySelector('.about-button').addEventListener("click", function (e) {
        document.querySelector('.about').scrollIntoView({behavior: 'smooth', block: 'start'});
    })
    document.querySelector('.team-button').addEventListener('click', function() {
        document.querySelector('.team').scrollIntoView({behavior: 'smooth', block: 'start'})
    })
}

function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}