const note = document.querySelector('.nowplaying')

document.addEventListener('keydown', function(event) {
    
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    
    if(!key) return;

    const keyNote = key.getAttribute('data-note')

    note.innerHTML = `<h2>${keyNote}</h2>`
    
})
