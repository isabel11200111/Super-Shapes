// duplicate function
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = newContent
}
// running duplicate function for 10 crosses
const crosses = document.querySelector('#crosses')
duplicateHtml(crosses, 10)

anime({
  targets: '#crosses path',
  rotate: '1turn',
  direction: 'alternate',
  loop: true,
  duration: 1000,
  easing: 'easeInOutSine',
  delay: (el, i, l) => i* 100,
});

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
  duration: 2000,
  loop: true,
  easing: 'linear',
  autoplay: true,
})


const zigZagPath = document.querySelector('#zigzag path');
const zigZagOffset = anime.setDashoffset(zigZagPath);
  zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
  anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });


const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset);
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
});


// running duplicate function for 40 square  dots
duplicateHtml(document.querySelector('#dots'),40)
const dots = document.querySelectorAll('#dots .dot')

dots.forEach(dot => {
  anime({
    targets:dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  })
});

// running duplicate funtion for 20 flashing circle dots
duplicateHtml(document.querySelector('#circles'),20)
anime({
  targets:'#circles .dot',
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration:250,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})


// four rectangles of flashing colours
anime({
  targets:'#flashes .flash',
  backgroundColor:(el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  delay:(el, i) => anime.random(50, 100),
  duration: 500,
  loop:true,
  direction: 'alternate',
  easing:'easeInOutSine'
})

// turning squares
anime({
  targets:'#squares rect',
  translateX:['-50%','-50%'],
  translateY:['-50%', '-50%'],
  rotate:[45, 0, -45],
  delay:(el, i) => 100 * i,
  duration:(el, i) => 750,
  loop:true,
  direction:'alternate',
  easing:'easeInOutSine',
})
