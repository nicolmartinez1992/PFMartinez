const cartItemsElement = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-btn");

// Arreglo para almacenar los items del carrito 
let cartItems = [];

// Funcion para actualizar el carrito
function updateCart() {
    // Limpiar el contenido del elemento del carrito
    cartItemsElement.innerHTML = "";
    // Calcular el total
    let total = 0;
    // Recorrer los items del carrito y agregarlos al elemento del carrito
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const listItem = document.createElement("li");
        listItem.textContent = item.name + " - $" + item.price;
        cartItemsElement.appendChild(listItem);

        total += item.price;
    }

    // Actualizar el total en el elemento del total del carrito
    cartTotalElement.textContent = "$" + total;
}

// Función para agregar un item al carrito
function addItemToCart(name, price) {
    const item = { name: name, price: price };
    cartItems.push(item);
    updateCart();
}

// Evento para el botón de pagar
checkoutButton.addEventListener("click", function () {
    // Realizar el proceso de pago aquí
    alert("Pago realizado con éxito. Gracias por su compra.");
    cartItems = []; // Vaciar el carrito después del pago
    updateCart(); // Actualizar el carrito vacío
});

addItemToCart("Producto 1", 10);
addItemToCart("Producto 2", 20);