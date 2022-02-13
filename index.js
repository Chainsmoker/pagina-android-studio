let input = document.querySelector(".navbar-otros-input-item")
let otrosContenedor = document.querySelector(".navbar-otros")
let inputContenedor = document.querySelector(".navbar-otros-input")
let enlacesContenedor = document.querySelector(".navbar-enlaces")

input.addEventListener("click", ()=>{
    enlacesContenedor.classList.toggle("dpnone")
    otrosContenedor.classList.toggle("navbar-otros-efecto")
    inputContenedor.classList.toggle("navbar-otros-input-efecto")
})
