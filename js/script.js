const note = document.querySelector('.nowplaying')
const keys = document.querySelectorAll('.key')

document.addEventListener('keydown', function(event) {
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    
    if(!key) return;

    const keyNote = key.getAttribute('data-note')

    key.classList.add('playing')

    note.innerHTML = `<h2>${keyNote}</h2>`
    
})

function removeTransition() {
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
