$(document).ready(function() {
    anime({
        targets: '#svgGroup',
        strokeDashoffset: [1000, 0],
        easing: 'easeInOutSine',
        duration: 6000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false,
    },)
})

