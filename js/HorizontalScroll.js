gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.containerA',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => '+=' + document.querySelector('.containerA').offsetWidth,
  },
});

gsap.to('.c', {
  scrollTrigger: {
   trigger: '.c',
    horizontal: true,
    start: 'left 100px',
    end: 'right center',
    scrub: true,
    // end: () => '=+' + document.querySelector('.c').offsetWidth,
    markers: true,

    toggleActions: 'restart pause reverse pause',
  },
  x: 400,
  rotation: 360,
  ease: 'none',
  duration: 3,
});
// const tlA = newTimeline();
// tlA.to('.containerA', 0.5, { xPercent: -20 });
// tlA.from(content[0], 0.5, { opacity: 0 });
// tlA.to('.containerA', 0.5, { xPercent: -40 });
// tlA.from(content[1], 0.5, { opacity: 0 });
