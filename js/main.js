const slider = tns({
    container: '.slider',

    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    // loop: false, // Ломает работу с lazyload

    autoWidth: true,
    "lazyload": true,
    "swipeAngle": false,

    controlsContainer: '.locations__controls',
    nav: false,
});

const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

prevMobile.onclick = () => slider.goTo('prev');

nextMobile.onclick = () => slider.goTo('next');
