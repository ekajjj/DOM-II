// Your code goes here
// Jake Johnson - DOM II


// mouse-over
const funBusLogo = document.querySelector('h1')
funBusLogo.addEventListener('mouseover', element => {element.target.style.color = 'blue'})


// testing mouseenter/mouseout
const lgHeader = document.querySelector('.logo-heading');

lgHeader.addEventListener('mouseenter', e => {
  lgHeader.textContent = 'mouseon Fun Bus';
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
    imgZoom.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const imgZoom = document.querySelector('img');
  imgZoom.onwheel = zoom;

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


// onclick

const onclickTest = document.querySelector('footer');
const onClick1 = window.addEventListener('onclick', event => {
    console.log('footer clicked')
  })

// resize

const mobileResize = window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 500) {
      alert('mobile query engaged');
    }
  })


// could put a seperate if in just a generalResize
const tabletResize= window.addEventListener('resize', function() {
    if(document.documentElement.clientWidth <= 800) {
      alert('tablet query engaged');
    }
  })


// scroll

let counter = 0;
window.addEventListener("scroll", function (event) {
    counter++;
    if (counter > 100) {
        alert("scroll counter > 100");
        counter = 0;
    }
});

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


//preventDefault

const navs = document.querySelector('.nav-link')

navs.addEventListener('click', event => {
  event.preventDefault();
  console.log('preventDefault');
})