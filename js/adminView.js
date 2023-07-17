document.addEventListener('DOMContentLoaded', function () {
    const oradoresBtn = document.getElementById('oradoresBtn');
    const comprasBtn = document.getElementById('comprasBtn');
    const oradoresTable = document.getElementById('oradoresTable');
    const comprasTable = document.getElementById('comprasTable');

    oradoresBtn.classList.add('active');
    oradoresTable.style.display = 'block';
    comprasTable.style.display = 'none';
    obtenerOradores();

    oradoresBtn.addEventListener('click', function () {
        oradoresBtn.classList.add('active');
        comprasBtn.classList.remove('active');
        oradoresTable.style.display = 'block';
        comprasTable.style.display = 'none';
        obtenerOradores();
    });

    comprasBtn.addEventListener('click', function () {
        comprasBtn.classList.add('active');
        oradoresBtn.classList.remove('active');
        comprasTable.style.display = 'block';
        oradoresTable.style.display = 'none';
        obtenerCompras();
    });




    function obtenerOradores() {
        method: "GET",
        fetch('http://localhost:8080/api/oradores/all')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('tableBodyOradores');
                tableBody.innerHTML = '';

                data.forEach(orador => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${orador.nombre}</td>
                        <td>${orador.apellido}</td>
                        <td>${orador.tema}</td>
                        <td>
                            <button class="btn btn-danger eliminar-orador-btn" data-id="${orador.id}">Eliminar</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            
                // Asignar eventos a los botones de eliminar
                const eliminarOradorBtns = document.querySelectorAll('.eliminar-orador-btn');
                eliminarOradorBtns.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const id = btn.getAttribute('data-id');
                        eliminarOrador(id);
                    });
                });
            });
    }

    function obtenerCompras() {
        fetch('http://localhost:8080/api/compras/all')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('tableBodyCompras');
                tableBody.innerHTML = '';

                data.forEach(compra => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${compra.nombre}</td>
                        <td>${compra.apellido}</td>
                        <td>${compra.email}</td>
                        <td>${compra.cantidadEntradas}</td>
                        <td>${compra.categoria}</td>
                        <td>${compra.total}</td>
                        <td>
                            <button class="btn btn-danger eliminar-compra-btn" data-id="${compra.id}">Eliminar</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            
                // Asignar eventos a los botones de eliminar
                const eliminarCompraBtns = document.querySelectorAll('.eliminar-compra-btn');
                eliminarCompraBtns.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const id = btn.getAttribute('data-id');
                        eliminarCompra(id);
                    });
                });
            });
        }


    function eliminarOrador(id) {
        fetch(`http://localhost:8080/api/oradores/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar la compra');
            }
            Swal.fire({
                title: 'Compra eliminada',
                icon: 'success',
                text: 'La compra se eliminó correctamente',
            });
    
            obtenerOradores();
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: error.message,
            });
        });    }

    function eliminarCompra(id) {
        fetch(`http://localhost:8080/api/compras/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar la compra');
            }
            Swal.fire({
                title: 'Compra eliminada',
                icon: 'success',
                text: 'La compra se eliminó correctamente',
            });
    
            obtenerCompras();
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: error.message,
            });
        });
    }


});
