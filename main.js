const productos = [
    {
        name: "Colchón Sonno",
        info: "Estructura de resortes “Ultra-Coil”. Tela Jackard completamente matelasseada. Esructura con doble marco perimetral de acero y estabilizadores",
        price: 50,
        imagen: "https://cdn.shopify.com/s/files/1/0046/3477/1571/products/Piero0531_1024x1024@2x.jpg?v=1563208243",
    },
    {
        name: "Colchón Regno con Pillow",
        info: "Colchón de resortes en su versión con Pillow Top para mayor comodidad, permite obtener un producto más alto y más mullido, logando una sensación de confort única. Tapizado en Tela Jackard, con manijas y aireadores para mayor comodidad, frescura y ventilación.",
        price: 150,
        imagen: "https://cdn.shopify.com/s/files/1/0046/3477/1571/products/Colchon_Regno_PT_160_-_1_480x320.jpg?v=1571436743",
    },
    {
        name: "Colchón Montreaux con Pillow",
        info: "Colchón de resortes individuales, con doble Pillow top que agrega confort. Tapizado en Tejido de Punto.",
        price: 50,
        imagen: "https://cdn.shopify.com/s/files/1/0046/3477/1571/products/Piero-COLCHON_MONTREAUX_2_CON_PILOW_TOP_190X140X34_CON_SOMMIER_EXCLUSIVO_190X140_X20-07_29-476_-min_3ff0ff0a-3feb-4023-806d-b1ec87f64bc7_1024x1024@2x.jpg?v=1539369219"
    },
    {
        name: "Colchón Regno con Pillow",
        info: "Colchón de resortes entrelazados con doble Pillow Top, tapizado en tela jackard.",
        price: 150,
    },
    {
        name: "Colchón Sonno",
        info: "Colchón de resortes entrelazados, tapizado en tela jackard.",
        price: 50,
    },
]

let cards = ""
for (let i = 0; i < productos.length; i++) {
    cards += `
  <div class="ficha">
    <div class="imagen">
    <img src="${productos[i].imagen}"></img>
    </div>
    <div class="texto">
    <h1 class="tittle"> ${productos[i].name}</h1>
    <p class="description"> ${productos[i].info} </p>
    </div>
  <div class="button"> 
  <h2>VER PRODUCTO</h2> 
  </div>
  </div>`
}

console.log(cards)
let catalogo = document.getElementsByTagName("section")
console.log(catalogo)
let fichaDeProducto = catalogo[0]
console.log(fichaDeProducto)
fichaDeProducto.innerHTML = cards


