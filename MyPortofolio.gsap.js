setTimeout( function smoothSlide () {
const left = gsap.utils.toArray('.left');

left.forEach((left, i) => {
  const animLeft = gsap.fromTo(left, {autoAlpha: 0, x: -100 }, {duration: 1, autoAlpha: 1, x: 0});
  ScrollTrigger.create({
    trigger: left,
    animation: animLeft,
    toggleActions: 'restart restart restart restart',
    once: false,
  });
});

const right = gsap.utils.toArray('.right');

right.forEach((right, i) => {
  const animRight = gsap.fromTo(right, {autoAlpha: 0, x: 100}, {duration: 1, autoAlpha: 1, x: 0});
  ScrollTrigger.create({
    trigger: right,
    animation: animRight,
    toggleActions: 'restart restart restart restart',
    once: false,
  });
});

}, 2000)
