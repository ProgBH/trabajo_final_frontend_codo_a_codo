function calcularPrecio() {
    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cantidad = parseInt(document.getElementById('quantity').value);
    const categoria = document.getElementById('category').value;
    var priceElement = document.getElementById('price');
    var generateButton = document.getElementById('generateButton');

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

        if (generateButton) {
            generateButton.removeAttribute('disabled');
        }
    } else {
        if (generateButton) {
            generateButton.setAttribute('disabled', true);
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
    document.getElementById('generateButton').setAttribute('disabled', true);
}


function chargeCompra() {
    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const cantidad = parseInt(document.getElementById('quantity').value);
    const categoria = document.getElementById('category').value;
  

    let categoriaEnum = "";
    let descuento = 0;
    if (categoria === 'categoria1') {
        categoriaEnum = "ESTUDIANTE";
        descuento = 0.8;
    } else if (categoria === 'categoria2') {
        categoriaEnum = "TRAINEE";
        descuento = 0.15;
    } else if (categoria === 'categoria3') {
        categoriaEnum = "JUNIOR";
        descuento = 0.5;
    }

    const precioEntrada = 2000;
    const precioTotal = cantidad * precioEntrada * (1 - descuento);

    const compraData = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      cantidadEntradas: cantidad,
      categoria: categoriaEnum,
      total: precioTotal
    };
  
    fetch("http://localhost:8080/api/compras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(compraData)
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
            icon: "success",
            title: "Compra confirmada",
            text: "Te enviaremos a tu correo electrónico  los pasos para finalizar tu compra.",
            confirmButtonText: "Continuar",
            confirmButtonColor: '#0297de',
          });
      })
      .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Sucedio un error inesperado",
            text: "Reintente de nuevo más tarde.",
            confirmButtonText: "Cerrar",
            confirmButtonColor: '#0297de',
          });
  
      });

      clearFields()

  }