setTimeout( function smoothSlide () {
const left = gsap.utils.toArray('.left');

left.forEach((left, i) => {
  const animLeft = gsap.fromTo(left, {autoAlpha: 0, x: -100 }, {duration: 1, autoAlpha: 1, x: 0});
  ScrollTrigger.create({
    trigger: left,
    animation: animLeft,
    toggleActions: 'play none none none',
    once: false,
  });
});

const right = gsap.utils.toArray('.right');

right.forEach((right, i) => {
  const animRight = gsap.fromTo(right, {autoAlpha: 0, x: 100}, {duration: 1, autoAlpha: 1, x: 0});
  ScrollTrigger.create({
    trigger: right,
    animation: animRight,
    toggleActions: 'play none none none',
    once: false,
  });
});

const bottomSlide = gsap.utils.toArray('.bottomSlide');

bottomSlide.forEach((bottomSlide, i) => {
  const animBottomSlide = gsap.fromTo(bottomSlide, {autoAlpha: 0, y: 100}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: bottomSlide,
    animation: animBottomSlide,
    toggleActions: 'play none none none',
    once: false,
  });
});

}, 3000)
