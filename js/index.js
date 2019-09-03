// Your code goes here
// Jake Johnson - DOM II


// mouse-over
const funBusLogo = document.querySelector('h1')
funBusLogo.addEventListener('mouseover', element => {element.target.style.color = 'blue'})


// testing mouseenter/mouseout
const lgHeader = document.querySelector('.logo-heading');

lgHeader.addEventListener('mouseenter', e => {
  lgHeader.textContent = 'Large Fun Bus';
});

lgHeader.addEventListener('mouseout', e => {
  lgHeader.textContent = 'Fun Bus';
});

// test keydown

const keyDown = window.addEventListener('keydown', event => {
    console.log('keydown initiated')
  })

// wheel, using zoom function from MDN source
// why does this only affect one img?

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

  // drag/drop

const imgListener = document.querySelectorAll('img')
imgListener.forEach(event => {
    addEventListener('drag', event => {
        console.log("image being dragged")
    })
})

const divListener = document.querySelectorAll('div')
divListener.forEach(event => {
    addEventListener('drag', event => {
        console.log("div being dragged")
    })
})

// load

window.addEventListener('load', (event) => {
    console.log('Page is fully loaded.');
  });

// focus


// resize

const mobileResize = window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 500) {
      alert('mobile query engaged');
    }
  })

const tabletResize= window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 800) {
      alert('tablet query engaged');
    }
  })

// dblclick
const dblClick = document.querySelector('.intro')

dblClick.addEventListener('dblclick', function(event) {
  console.log('Intro has been double-clicked')
})


// first button only dblclick
const btnClick = document.querySelector('.btn')

btnClick.addEventListener('dblclick', function(event) {
  alert('thanks for clicking the button');
})
