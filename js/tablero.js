import { caracter } from "./Data.js"
let tablero = document.querySelector(".tablero")

function cargar_caracteres(){
    caracter.forEach((cada_div)=>{
        let div = document.createElement("div")
        div.classList.add("funciones")
        div.innerHTML = cada_div
        tablero.appendChild(div)
    })
}
    tablero.innerHTML = `<div class="igual">=</div>`
cargar_caracteres();