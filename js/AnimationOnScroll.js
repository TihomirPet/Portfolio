

// TweenLite.defaultEase = Linear.easeNone;
// var controller = new ScrollMagic.Controller();
// var tl = new TimelineMax();
// tl.staggerFrom(".box", 1.5, {
//   scale: 0,
//   cycle: {
//     z: [-10, 0]
//   },
//   stagger: {
//     from: "center",
//     amount: 0.90
//   }
// });

// var scene = new ScrollMagic.Scene({
//     triggerElement: "#stage",
//     duration: "50%",
//     triggerHook: 0.59
//   })
//   .addIndicators({
//     // name: "Box Timeline",
//     // colorTrigger: "white",
//     // colorStart: "white",
//     // colorEnd: "white"
//   })

//   .setTween(tl)
//   .addTo(controller);

// const timeline = new gsap.timeline({
//   defaults: {
//     duration: 1,
//     transformOrigin: 'center',
//     ease: 'elastic',
//   },
// });

// timeline
//   .from('#bg-01', {
//     x: '-=500',
//     opacity: 0,
//     // delay: 1,
//     // duration: 1,
//     // ease: 'elastic',
//     // yoyo: true,
//   })
//   .from(
//     '#bg-02',
//     {
//       x: '+=500',
//       opacity: 0,
//     },
//     '-=1'
//   )
// //   .from('#bowl', {
// //     x: -190,
// //     opacity: 0,
// //   })
//   .from('#sushi-01', {
//     duration: 0.4,
//     opacity: 0,
//     y: '-=100',
//     rotation: 70,
//     ease: Elastic.easeOut,
//   })
//   .from(
//     '#sushi-02',
//     {
//       duration: 0.4,
//       opacity: 0,
//       y: '-=300',
//       rotation: 70,
//       ease: Bounce.easeOut,
//     },
//     '-=0.2'
//   )
//   .from(
//     '#sushi-03',
//     {
//       duration: 0.4,
//       opacity: 0,
//       y: '-=300',
//       rotation: 70,
//       ease: Bounce.easeOut,
//     },
//     '-=0.5'
//   )
//   .from(
//     '#chopstick-01',
//     {
//       duration: 0.4,
//       y: -250,
//       opacity: 0,
//       rotation: 20,
//     },
//     '-=.4'
//   )
//   .from(
//     '#chopstick-02',
//     {
//       duration: 0.4,
//       y: -250,
//       opacity: 0,
//       rotation: 0,
//     },
//     '-=.4'
//   )
//   .from('.heading', {
//     y: 200,
//     opacity: 0,
//   });

// const controller = new ScrollMagic.Controller();

// // Initialise ScrollMagic Scene
// const scene = new ScrollMagic.Scene({
//   triggerElement: '.sushi-animation',
//    triggerHook: 'onLeave',

//   duration: '100%',
// })
//   .setPin('.sushi-animation') // This method will pin your scene in which the animation is playing
//   .setTween(timeline) // This method will bind our GSAP Animation with our ScrollMagic Scene
//   .addTo(controller); // This method will add the ScrollMagic controller into our ScrollMagic scene


// ====================================================================================
// let st = ScrollTrigger.create({
//   trigger: '.test',
//   start: 'top top',
//   endTrigger: '.wrapper',
//   end: 'bottom 50%+=100px',
//   start: 'top',
//   pin: true,
//   markers: true,
// });

// =======================================================================================
gsap.registerPlugin(ScrollTrigger);

// gsap.to('.testB', {
//   scrollTrigger: {
//     trigger: '.testA',
//     markers: true,
//     start: 'top top',
//     end: '+=500',
//     pin: '.testA',
//     scrub: 2,
//     toggleActionsRestart: 'restart nono none none',
//   },
//   opacity: 1,
 
// });

// ===========================================================================================

// gsap.defaults({ ease: 'power3' });

// gsap.set('.textProfile', { y: 0 });

// ScrollTrigger.batch('.textProfile', {
//   start: 'top 300',
//   end: 'bottom end',
//   onEnter: (batch) =>
//     gsap.to(batch, {
//       opacity: 1,
//       y: 0,
//     }),
//   onLeaveBack: (batch) =>
//     gsap.to(batch, {
//       opacity: 0.6,
//       y: 0,
    
//     }),
// });

// ScrollTrigger.addEventListener('refreshInit', () =>
//   gsap.set('.textProfile', { y: 0 ,duration:1})
// );

//=================================================================================


// gsap.defaults({ ease: 'power3' });
// gsap.set('.test1', { y: 100 });

// ScrollTrigger.batch('.test1', {
//   start: 'top 300',
//   end: 'bottom end',

//   onEnter: (batch) =>
//     gsap.to(batch, { opacity: 1, z: 0, backgroundSize: '100%', stagger: 0.15 })
//     ,
   
//   onLeaveBack: (batch) =>
//     gsap.to(batch, { opacity: 0, z: 10, backgroundSize: '100%', stagger: 0.1 }),


    
// });

// ScrollTrigger.addEventListener('refreshInit', () =>
//   gsap.set('.test1', { y: 0, backgroundSize: '0%' })
// );
// =====================================================
// ScrollTrigger.batch('.test1', {
//   onEnter: (elements) => {
//     gsap.from(elements, {
//       autoAlpha: 0,
//       y: 600,
//       duration: 1,
//       stagger: 0.5,
//       ease: 'Power.easeInOut',
//     });
//   },
//   once: true,
// });

