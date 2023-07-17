function sendForm() {

  var name = document.getElementById("formName").value;
  var lastName = document.getElementById("formLastName").value;
  var message = document.getElementById("textArea").value;

  if (name != "" && lastName != "" && message != "") {
    document.getElementById("formName").value = ""
    document.getElementById("formLastName").value = ""
    document.getElementById("textArea").value = ""


    const compraOrador = {};
    compraOrador["nombre"] = name;
    compraOrador["apellido"] = lastName;
    compraOrador["tema"] = message;
    compraOrador["fecha_creacion"]= new Date().getTime;

    // Realiza la solicitud HTTP POST al backend
    fetch("http://localhost:8080/api/oradores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      
      },
      body: JSON.stringify(compraOrador)
    })
      .then(response => response.json())
      .then(data => {

        Swal.fire({
          icon: "success",
          title: "Incripcion confirmada",
          text: "Nos comunicaremos contigo a la brevedad.",
          confirmButtonText: "Continuar",
          confirmButtonColor: '#0297de',
        });

      })
      .catch(error => {

        Swal.fire({
          icon: "Error",
          title: "Suucedio un error inesperado",
          text: "Reintenta de nuevo ma tarde.",
          confirmButtonText: "Cerrar",
          confirmButtonColor: '#0297de',
        });

      });


  }


}