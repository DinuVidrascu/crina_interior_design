// 3d scroll

let zSpacing = -1360,
   lastPos = zSpacing / 5,
   $frames = document.getElementsByClassName('frame'),
   frames = Array.from($frames),
   zVals = []


window.onscroll = function () {

   let top = document.documentElement.scrollTop,
      delta = lastPos - top
      lastPos = top
      zVals = zVals.slice(0, frames.length);

   frames.forEach(function (n, i) {
      zVals.push((i * zSpacing) + zSpacing)
      zVals[i] += delta * -5.5
      let frame = frames[i],
         transform = `translateZ(${zVals[i]}px)`,
         opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
      frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
   })
}

window.scrollTo(0, 1)


// Audio

let soundButton = document.querySelector('.soundbutton')
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
   soundButton.classList.toggle('paused')
   audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
   soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
   audio.pause()
}

function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');
   if(this.scrollY >= 800) scrollUp.classList.add('show-scroll'); 
   else scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', scrollUp)