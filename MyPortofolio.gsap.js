setTimeout(function smoothSlide () {
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

const bottomSlide = gsap.utils.toArray('.bottomSlide');

bottomSlide.forEach((bottomSlide, i) => {
  const animBottom = gsap.fromTo(bottomSlide, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: bottomSlide,
    animation: animBottom,
    toggleActions: 'restart none restart restart',
    once: false,
  });
});

const stable = gsap.utils.toArray(".stableOp");

stable.forEach((stable, i) => {
  const animStable = gsap.fromTo(stable, {autoAlpha: 0}, {duration: 1, autoAlpha: 1});
  ScrollTrigger.create({
    trigger: stable,
    animation: animStable,
    toggleActions: 'restart none restart restart',
    once: false,
  });
});
}, 1000);