gsap.registerPlugin(ScrollTrigger);

gsap.from(".top-flower-left",{x:-100, duration:1.5, opacity:0});
gsap.from(".top-flower-right",{x:100, duration:1.5, opacity:0});
gsap.from(".logo",{y:300, duration:1.5, opacity:0});
gsap.from(".banner-text",{y:100, duration:1, opacity:0, delay:1.2});
gsap.from(".coconut-tree", {
  scrollTrigger: ".coconut-tree", 
  y:300,
  duration:1,
  opacity:0
});
ScrollTrigger.batch(".small-copy", {
       onEnter: batch => {
           gsap.from(batch, {
               duration: 1,
               y: 40,
               scale: 1,
               autoAlpha: 0,
               ease: "Power3.easeOut",
               stagger: 0.2,
               visibility: "visible",
           })
       },
       toggleActions: "play none none none",
       once: true,
       start: 'top 80%',
       end: 'top 40%',
       markers: false,


   });
