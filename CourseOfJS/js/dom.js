//DOM
// let cajita= document.getElementsByClassName('cajita')
// let cajita1 = document.getElementById('cajita1')
// // for (let index = 0; index < cajita.length; index++) {
// //     const element = cajita[index];
// //     element.textContent= index
// // }
// cajita1.textContent='HOLA MUNDO'
//AGREGANDO NODOS

/*
//obteniendo el contenedor 
let contenedor= document.getElementById('contenedor')
//creando el elemento html
let elemento= document.createElement('div')
//ingresandole texto al elemento html
elemento.textContent='Cuatro'
elemento.setAttribute('class','cajita')
//agregando el elemento al contenedor padre
contenedor.appendChild(elemento)
*/

//agregar mas de uno 
let contenedor = document.getElementById('contenedor')
let fragmento= document.createDocumentFragment()
for (let index = 0; index < 4; index++) {
    let elemento = document.createElement('div')
    elemento.textContent = index
    elemento.setAttribute('class', 'cajita')
    fragmento.appendChild(elemento)
}
contenedor.appendChild(fragmento)