
let seleccionado = localStorage.getItem('producto')
seleccionado = JSON.parse(seleccionado)
console.log(seleccionado)
let contenedor = document.getElementById('producto1')
let regresar = document.querySelector('.btn_compra')

async function traer(){

    contenedor.innerHTML += `
    <h2>Haz comprado: ${seleccionado[0].title}</h2>
    `
    regresar.addEventListener('click',()=>{
      location.assign("../HTML/principal.html")
    })
}
traer()
 
