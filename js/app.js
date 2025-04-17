gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero-section', { opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '900',
      scrub: true
    }
  })
  

  let itemsL = gsap.utils.toArray('.gallery-left .gallery__item')
  itemsL.forEach(item => {
    gsap.fromTo(item, {x: -200,  opacity: 0}, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true
      }
    }) 
  })

  let itemsR = gsap.utils.toArray('.gallery-right .gallery__item')
  itemsR.forEach(item => {
    gsap.fromTo(item, {x: 200,  opacity: 0}, {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-400',
        scrub: true
      }
    }) 
  })

}

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 710) scrollUp.classList.add('show-scroll'); 
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    view = document.querySelector('.view')
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
        view.style.opacity = '0'
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        view.style.opacity = '1'
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});
