// let fecha= new Date()
// console.log('Fecha general o entera:'+fecha)
// console.log('hora en numero:'+ fecha.getHours())
// console.log('minutos :'+ fecha.getMinutes())
// console.log('segundos:'+ fecha.getSeconds())
// console.log('fecha del dia:'+ fecha.getDay())
// console.log('Anno en el que estamos:'+ fecha.getFullYear())
// console.log('Mes :'+ fecha.getMonth())

const mostrarFecha=()=>{
    let date= new Date()
    const h3= document.getElementById('fecha')
    h3.innerHTML=date
}
setInterval(mostrarFecha, 1000)