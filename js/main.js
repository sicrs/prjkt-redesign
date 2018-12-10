let projectCarousel;

window.onload = function () {
    init()
}

function init() {
    for (let i = 0; i < document.querySelectorAll('.mdc-button').length; i ++) {
        mdc.ripple.MDCRipple.attachTo(document.querySelectorAll('.mdc-button')[i])
    }
    for (let i = 0; i < document.querySelectorAll('.mdc-card').length; i++) {
        mdc.ripple.MDCRipple.attachTo(document.querySelectorAll('.mdc-card')[i])
    }
    projectCarousel = new Carousel(document.querySelector('.carousel'))
}

let Carousel = class {
    constructor(node) {
        this._node = node
        this._scroller = document.querySelector('.' + this._node.classList[0] + ' .carousel-scroller'); //Ugly but it works
        this.init()
    }
    get node() {
        return this._node;
    }
    get scroller() {
        return this._scroller;
    }
    get style() {
        return this._scroller.style.transform;
    }
    scrollRight() {
        let value = this._scroller.style.transform.replace(/(.*\(\-?)(\d+)(.*)/, '$2');
        value = value / 75
        let childAmount = this._scroller.children.length - 1
        if (value !== childAmount) {
            document.querySelector('.carousel-control--right').style.opacity = 1
            this._scroller.style.transform = 'translateX(-' + (75 * (value + 1)) + '%)'
            console.log(childAmount - 1, value + 1)
            if (value === childAmount - 1) {
                document.querySelector('.carousel-control--right').style.opacity = 0
            }
        }
        document.querySelector('.carousel-control--left').style.opacity = 1;
    }
    scrollLeft() {
        let value = this._scroller.style.transform.replace(/(.*\(\-?)(\d+)(.*)/, '$2');
        value = value / 75
        if (value !== 0) {
            document.querySelector('.carousel-control--left').style.opacity = 1;
            this._scroller.style.transform = 'translateX(-' + (75 * (value - 1)) + '%)'
            if (value === 1) {
                document.querySelector('.carousel-control--left').style.opacity = 0;
            }
        }
        document.querySelector('.carousel-control--right').style.opacity = 1;
    }
    init() {
        let controls = document.querySelectorAll('.carousel-controls')
        for (let i = 0; i < controls.length; i ++) {
            mdc.ripple.MDCRipple.attachTo(controls[i])
        }
        document.querySelector('.carousel-control--left').style.opacity = 0;
    }
}