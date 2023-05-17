
// Barra de búsqueda 
const productos = [
    {
        nombre: "jean cargo negro",
        precio: 2190
    },
    {
        nombre: "short celeste",
        precio: 1490
    },
    {
        nombre: "jean cargo azul",
        precio: 2190
    },
    {
        nombre: "body naranja",
        precio: 1290
    },
    {
        nombre: "top multicolor",
        precio: 1690
    },
    {
        nombre: "body rosado",
        precio: 1290
    }
]


let buscar = document.getElementById("searchButton")
buscar.onclick = () => {
    let ingreso = document.getElementById("ingreso")

    if (ingreso.value === "") {
        console.log("El campo de búsqueda está vacío")
    } else { 
        const resultado = productos.filter((producto) => producto.nombre.includes(ingreso.value))
        console.log(resultado)
    }
}













