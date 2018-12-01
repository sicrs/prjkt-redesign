let tabbar;
window.onload = () => {
    init()
}

window.onscroll = () => {
    if (isElementInViewport(document.querySelector('.title')) === true) {
        tabbar.foundation_.adapter_.setActiveTab(0)
    } else {
        if (isElementInViewport(document.querySelector('.projects-header')) || isElementInViewport(document.querySelectorAll('.project-item')[document.querySelectorAll('.project-item').length - 1])) {
            tabbar.foundation_.adapter_.setActiveTab(1)
        } else if (isElementInViewport(document.querySelector('.about-header')) || isElementInViewport(document.querySelector('.about'))) {
            tabbar.foundation_.adapter_.setActiveTab(2)
        } else if (isElementInViewport(document.querySelector('.team-header')) || isElementInViewport(document.querySelector('.team'))) {
            tabbar.foundation_.adapter_.setActiveTab(3)
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
    tabbar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
    let navButtons = document.querySelectorAll('.mdc-tab')
    navButtons[0].addEventListener('click', (e) => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    })
    navButtons[1].addEventListener('click', (e) => {
        document.querySelector('.projects').scrollIntoView({behavior: 'smooth', block: 'start'});
        //setTimeout(tabbar.foundation_.adapter_.setActiveTab(1), 200)
    })
    navButtons[2].addEventListener("click", function (e) {
        document.querySelector('.about').scrollIntoView({behavior: 'smooth', block: 'start'});
        //setTimeout(tabbar.foundation_.adapter_.setActiveTab(2), 200)
    })
    navButtons[3].addEventListener('click', function() {
        document.querySelector('.team').scrollIntoView({behavior: 'smooth', block: 'start'});
        //setTimeout(tabbar.foundation_.adapter_.setActiveTab(3), 200)
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