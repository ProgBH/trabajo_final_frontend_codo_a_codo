

function suscribe() {

  var email = document.getElementById("formSucribe").value;
  if (email != "") {
    document.getElementById("formSucribe").value = ""

    Swal.fire({
      icon: "success",
      title: "Gracias por suscribirte",
      text: "Te enviaremos nuestras novedades",
      confirmButtonText: "Continuar",
      confirmButtonColor: '#0297de',
    });

  }

}

function sendForm() {

  var name = document.getElementById("formName").value;
  var email = document.getElementById("formEmail").value;
  var country = document.getElementById("formCountry").value;
  var phone = document.getElementById("formPhone").value;
  var company = document.getElementById("formCompany").value
  var message = document.getElementById("formMessage").value;

  if (email != "" && name != "" && company != "" && message != "") {
    document.getElementById("formName").value = ""
    document.getElementById("formEmail").value = ""
    document.getElementById("formCountry").value = ""
    document.getElementById("formPhone").value = ""
    document.getElementById("formCompany").value = ""
    document.getElementById("formMessage").value = ""

    Swal.fire({
      icon: "success",
      title: "Gracias por suscribirte",
      text: "Te enviaremos nuestras novedades",
      confirmButtonText: "Continuar",
      confirmButtonColor: '#0297de',
    });
  }


}