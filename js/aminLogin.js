function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() !== "" && password.trim() !== "") {
        // Redirect to admin_view.html if both fields are not empty
        window.location.href = "../view/admin_view.html";
    } else {
        // Show an alert or any other logic for handling the case when fields are empty
        alert("Por favor, completa ambos campos.");
    }
}
