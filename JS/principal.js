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
    let elementos = null
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    elementos = Array.from(datos)
    console.log(datos)
    datos.forEach(item=>{
        tarjetas.innerHTML+= `
        <div class="tarjetas">
            <h3 class="titulo_tarjetas">${item.title}</h3>
            <div class="imagen_tarjeta"><img src="${item.image}"></div>
            <p class="texto_tarjeta">${item.description}</p>
            <P class="precio_tarjetas">$${item.price}</P>
            <button class="btn boton_tarjetas" id="btn ${item.id}">COMPRAR</button>
        </div>`
    })
    const ventanaModal = document.querySelector('.ventana_modal')
    let seleccionado = null
    tarjetas.addEventListener('click',(evento)=>{
        if(evento.target.classList.contains('btn')){
            seleccionado = elementos.filter(tarjeta=>tarjeta.title==evento.target.parentElement.querySelector('.titulo_tarjetas').textContent)
            console.log(seleccionado)
            ventanaModal.style.display = 'flex'
            const modalBody = document.querySelector('.ventana_modal')
            modalBody.innerHTML= `
            <div class="tarjetas">
                <h3 class="titulo_tarjetas">${seleccionado[0].title}</h3>
                <div class="imagen_tarjeta"><img src="${seleccionado[0].image}"></div>
                <p class="texto_tarjeta">${seleccionado[0].description}</p>
                <P class="precio_tarjetas">$${seleccionado[0].price}</p>
                <div class="botones">
                <button class="btn boton_tarjetas">COMPRAR</button>
                <button class="btn boton_cancelar">CANCELAR</button>
                </div>
                </div>`
                

                const cerrarModal =document.querySelector('.boton_cancelar')
              

                cerrarModal.addEventListener('click',()=>{
                    ventanaModal.style.display='none'
                })

                ventanaModal.addEventListener('click',(evento)=>{
                    if(evento.target.classList.contains ('boton_cancelar')){
                        return cerrarModal
                    }else if(evento.target.classList.contains('boton_tarjetas')){
                        if(confirm(`Seguro que desea comprar? ${seleccionado[0].title}`)==true){
                            localStorage.setItem('producto',JSON.stringify(seleccionado))
    
                        }
                    }
                })

            }
    })
}
traer()
