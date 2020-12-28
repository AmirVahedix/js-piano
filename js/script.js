const note = document.querySelector('.nowplaying')
const keys = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')

document.addEventListener('keydown', function(event) {
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    
    if(!key) return;

    const keyNote = key.getAttribute('data-note')

    key.classList.add('playing')

    note.innerHTML = `<h2>${keyNote}</h2>`

    
    audio.currentTime = 0
    audio.play()
    
})

function removeTransition() {
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

hints.forEach( (elm, index) => {
    elm.style = `transition-delay: ${index*20}ms;`
})