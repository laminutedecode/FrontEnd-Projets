window.addEventListener("load", funcLoad);


function funcLoad(){
  const TL = gsap.timeline({
    default: {
      ease: 'power3'
    }
  });

TL.to(".box-anim", { height: 400, duration: 1.3, delay: 0.4 })
  .to(".container-title", { height: 80, duration: 0.6 }, "-=0.8")
  .to(".container-title h2", { y: 0 }, "-=0.6")
  .to(".box-anim", { autoAlpha: 0, duration: 0.8 })
  .to(".container-title", { autoAlpha: 0, duration: 0.6 }, "-=0.6")
  .to(".container", { autoAlpha: 0, duration: 0.8 })
  .to(".content", { autoAlpha: 1, duration: 0.8 })
 
  
}
