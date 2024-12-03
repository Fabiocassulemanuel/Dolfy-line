
let fabio = document.getElementById('hack')
let file = document.getElementById('mobile')
let overlay = document.getElementById('overlay-menu')

fabio.addEventListener('click', ()=>{
	file.classList.add('geany')
})

file.addEventListener('click', ()=>{
	file.classList.remove('geany')
})

overlay.addEventListener('click', ()=>{
	file.classList.remove('geany')
})
