const inputNude = document.querySelector('.inp')
const button = document.querySelector('.boton')
const span = document.querySelector('.sp')
/////
const reset = document.querySelector('.delete')
//////

button.onclick = () => {
const longitud = inputNude.value
//ESTO ES PARA PASARLO AL SPAN///////document.querySelector('.sp').textContent = longitud
span.textContent = longitud.length

}

reset.onclick = () => {
    inputNude.value = ''
   span.textContent = inputNude.value
}