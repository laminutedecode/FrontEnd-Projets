window.addEventListener('load', init)

function init(){

    const anim = gsap.timeline({repeat: -1})


    anim
    .to('.slider p', {y: 0, autoAlpha: 1, stagger: 1})
    .to('.slider p', {y: -100, autoAlpha: 0, stagger: 1}, 1)

}