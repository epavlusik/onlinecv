gsap.from('.header', {duration: 1,y:'-100%',ease:'bounce'})
gsap.from('.link', {duration:3,opacity:0,delay:1, stagger:.5})
gsap.from('.right', {duration:2, x: '-100vw', delay:1,ease:'power2.in'})
gsap.from('.left', {duration:1, delay:1.5, x: '-100%'})
gsap.from('.footer', {duration:1, y: '900%',ease:'elastic', delay:3.5,})
gsap.to('.box1', {duration:3, y: '0', ease:'bounce', delay:3.5, stagger:.5})
gsap.from('.box2', {duration:3, y: '0', opacity:0, delay:6.5, stagger:.5})
gsap.from('.box3', {duration:3, y: '0', opacity:0, delay:7.5, stagger:.5})