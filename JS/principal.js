const carrusel = document.querySelector('.carrusel')
let fotos = ["../IMG/carrusel/foto1.jpeg", "../IMG/carrusel/foto2.jpg", "../IMG/carrusel/foto3.jpg"]

let indice = 0
setInterval(()=>{
   if (indice<fotos.length){
    carrusel.src = fotos[indice] 
    indice++
   }else{
    indice = 0
   }
},2000)

const url = "https://fakestoreapi.com/products"
const tarjetas = document.querySelector('.main_2')
async function traer(){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos)
    datos.forEach(item=>{
        tarjetas.innerHTML+= `
        <div class="tarjetas">
            <h3 class="titulo_tarjetas">${item.title}</h3>
            <div class="imagen_tarjeta"><img src="${item.image}"</div>
            <p class="texto_tarjeta">${item.description}</p>
            <P class="precio_tarjetas">$${item.price}</P>
            <button class="btn boton_tarjetas" id="btn ${item.id}">COMPRAR</button>
        </div>`
    })
}
traer()

const cerrar = document.querySelector('.modal_close')
const ventanaModal = document.querySelector('.ventana_modal')

cerrar.addEventListener('click',()=>{
    ventanaModal.style.display='none'

})

tarjetas.addEventListener('click',(evento)=>{
    if(evento.target.id=='btn1'){
        document.querySelector('.ventana_modal').style.display='flex'
    }
})