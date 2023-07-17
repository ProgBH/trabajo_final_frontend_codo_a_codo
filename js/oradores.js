function cargarTablaOradores(oradores) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
  
    oradores.forEach(orador => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${orador.nombre}</td>
        <td>${orador.apellido}</td>
        <td>${orador.tema}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function obtenerOradores() {
    fetch('http://localhost:8080/api/oradores/all')
      .then(response => response.json())
      .then(data => cargarTablaOradores(data))
      .catch(error => console.error('Error al obtener oradores:', error));
  }
   

  
  obtenerOradores();
  