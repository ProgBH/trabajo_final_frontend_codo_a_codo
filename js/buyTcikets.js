function calcularPrecio() {
    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cantidad = parseInt(document.getElementById('quantity').value);
    const categoria = document.getElementById('category').value;
    var priceElement = document.getElementById('price');


    if (nombre && apellido && cantidad && email) {
        let descuento = 0;
        if (categoria === 'categoria1') {
            descuento = 0.8;
        } else if (categoria === 'categoria2') {
            descuento = 0.15;
        } else if (categoria === 'categoria3') {
            descuento = 0.5;
        }

        const precioEntrada = 2000;
        const precioTotal = cantidad * precioEntrada * (1 - descuento);

        if (priceElement) {
            priceElement.innerText = 'Total a Pagar: $' + (precioTotal ? precioTotal.toFixed(2) : '0.00');
        }
    }
}

function clearFields() {
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('category').value = "categoria0";
    document.getElementById('price').innerText = "Total a Pagar: $";
}