anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  loop: true,
  duration: 250,
  easing: 'easeInOutSine',
  // delay applied as a static value as well as a function. when used as a function it loops through every individual single item
  // individual element, index, Length
delay: (el, i, l) => i* 50,
  //new vs old js ^
  // delay: function(el, i, l) {
  //   return i * 50;
  // }
});

anime({
  targets:'.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear',
  autoplay: true,
})
