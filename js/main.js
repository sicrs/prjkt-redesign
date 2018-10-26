let drawer;

window.onload = () => {
    init()
    //make sure top-app-bar title isnt visible onload
    isElementInViewport(document.querySelector('.title')) ? anime({targets: '.mdc-top-app-bar__title', color: '#FFF'}) : anime({targets: '.mdc-top-app-bar__title', color: '#000'}) 
    
}

window.onscroll = () => {
    if (isElementInViewport(document.querySelector('.title')) === true) {
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active')
        }
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
        
        document.querySelector('.projects-button').classList.remove('active')
    } else {
        if (isElementInViewport(document.querySelector('.projects-header')) === true) {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            document.querySelector('.projects-button').classList.add('active');
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
            
            
            
        } else if (isElementInViewport(document.querySelector('.about-header'))) {
            if (document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active')
            }
            document.querySelector('.about-button').classList.add('active');
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
        }
    }
};

const init = () => {
    const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
    
    let buttons = document.querySelectorAll('.mdc-button')
    for (let i = 0; i < buttons.length; i++) {
        mdc.ripple.MDCRipple.attachTo(buttons[i])
    }

    let links = document.querySelectorAll('.mdc-icon-button')
    for (let i = 0; i < links.length; i++) {
        mdc.ripple.MDCRipple.attachTo(links[i])
    }

    drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))

    document.querySelector('.projects-button').addEventListener('click', (e) => {
        document.querySelector('.projects').scrollIntoView({behavior: 'smooth'});
    })
    document.querySelector('.about-button').addEventListener("click", function (e) {
        document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
    })

    topAppBar.setScrollTarget(document.querySelector('.main'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });
    document.querySelector('.mdc-drawer-scrim').addEventListener("click", function() {drawer.open = false})
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