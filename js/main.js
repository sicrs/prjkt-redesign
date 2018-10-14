window.onload = () => {
    init()
    //make sure top-app-bar title isnt visible onload
    isElementInViewport(document.querySelector('.title')) ? anime({targets: '.mdc-top-app-bar__title', color: '#FFF'}) : anime({targets: '.mdc-top-app-bar__title', color: '#000'}) 
    load("one", content)
}

window.onscroll = () => {
    if (isElementInViewport(document.querySelector('.title')) === false) {
        if (isElementInViewport(document.querySelector('.projects-header')) === true) {
            document.querySelector('.projects-button').classList.add('active')
        }
        anime({
            targets: '.mdc-top-app-bar__title',
            color: '#FFF'
        });
        document.body.classList.remove('theme-primary');
        document.body.classList.add('theme-secondary');
        anime({
            targets: '.animatables',
            color: '#FFF',
            backgroundColor: '#000',
            duration: 15,
            easing: 'linear'
        });
        
    } else {
        anime({
            targets: '.mdc-top-app-bar__title',
            color: '#FFF'
        });
        document.body.classList.remove('theme-secondary');
        document.body.classList.add('theme-primary');
        anime({
            targets: '.animatables',
            color: '#000',
            backgroundColor: '#FFF',
            duration: 15,
            easing: 'linear'
        });
        document.querySelector('.projects-button').classList.remove('active')
    };

    if (isElementInViewport(document.querySelector('.projects')) === true) {
        document.querySelector('.projects-button').classList.add('mdc-button--raised')
    } else {
        document.querySelector('.projects-button').classList.remove('mdc-button--raised')
    }
};

const init = () => {
    mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'))
    
    let buttons = document.querySelectorAll('.mdc-button')
    for (let i = 0; i < buttons.length; i++) {
        mdc.ripple.MDCRipple.attachTo(buttons[i])
    }

    let links = document.querySelectorAll('.mdc-icon-button')
    for (let i = 0; i < links.length; i++) {
        mdc.ripple.MDCRipple.attachTo(links[i])
    }

    tabbar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

    document.querySelector('.projects-button').addEventListener('click', (e) => {
        document.querySelector('.projects').scrollIntoView({behavior: 'smooth'})
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

//best shitty methodTM
function load(tab, data) {
    let html = "";
    let contentKey = data[tab]
    html += '<h3 class="mdc-typography--headline6">' + contentKey.title + '</h3><p class="mdc-typography--subtitle1">' + contentKey.desc + '</p><a class="mdc-chip" href="' + contentKey.link + '"><i class="mdc-chip__icon mdc-chip__icon--leading mdi mdi-open-in-new"></i><span class="mdc-chip__text">'
    if (contentKey.link.includes('play')) {
        html += 'Play Store';
    } else {
        html += 'Github';
    };
    html += '</span></a>'
    document.querySelector('.project-content').innerHTML = html
}

let content = {
    one: {
        link: "https://play.google.com/store/apps/details?id=projekt.substratum",
        title: "substratum",
        desc: "Initially developed as a successor to the former product, Layers Manager, the new Substratum Theme Engine (available on Play Store) has been widely used amongst Android enthusiasts running Android 6.0 to Android 8.0. Mainly geared towards customizing system themes through Sony's Overlay Manager Service, as well as the deprecated system - Runtime Resource Overlay."
    },
    two: {
        link: "https://play.google.com/store/apps/details?id=projekt.andromeda",
        title: "andromeda",
        desc: "Andromeda is a plugin to enable rootless mode in substratum for Android 8.x. "
    },
    three: {
        link: "https://github.com/SubstratumResources",
        title: "substratum resources",
        desc: "A collection of repositories affiliating with the platform side changes to get Substratum and OMS working in harmony."
    },
    four: {
        link: "https://play.google.com/store/apps/details?id=projekt.sungstratum",
        title: "sungstratum",
        desc: "An add-on to enable substratum for Samsung users on Android 7.x, regardless of whether your device is rooted or not."
    }
}