function sendForm() {

  var name = document.getElementById("formName").value;
  var lastName = document.getElementById("formLastName").value;
  var message = document.getElementById("textArea").value;

  if (name != "" && lastName != "" && message != "") {
    document.getElementById("formName").value = ""
    document.getElementById("formLastName").value = ""
    document.getElementById("textArea").value = ""

    Swal.fire({
      icon: "success",
      title: "Incripcion confirmada",
      text: "Nos comunicaremos contigo a la brevedad.",
      confirmButtonText: "Continuar",
      confirmButtonColor: '#0297de',
    });
  }


}