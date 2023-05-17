let elementos = document.getElementsByClassName("add")

let carrito = JSON.parse(localStorage.getItem("carrito"));
console.log("HOLA", carrito)

if (carrito === null) {
    let carritoVacio = {
        productos: [
        ],
        total: 0
    };
    carrito = carritoVacio;
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));
}

Array.from(elementos).forEach((element) => {
    element.onclick = () => {
        const nombre = element.parentNode.parentNode.getElementsByClassName("spanProductos")[0].innerHTML
        let cantidad = +1
        const indiceProducto = carrito.productos.findIndex((producto)=>{
            return producto.nombre === nombre
        }
        )
        if (indiceProducto !== -1){
        carrito.productos[indiceProducto].cantidad += 1
        } else {
            carrito.productos.push({nombre, cantidad: 1})
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    console.log(element)
});

console.log(carrito)



