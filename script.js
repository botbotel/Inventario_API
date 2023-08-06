async function mostrarDatos() {
    fetch('http://localhost:3000/api/fechas_pedidos/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(respuesta => respuesta.json())
    .then(data => {
        let salida = "";
        for (const fechaPedido of data) {
            const fecha = new Date(fechaPedido.fecha_pedido);
            const fechaFormat = fecha.toLocaleDateString();
            salida += `      
            <tr>
                <td>${fechaPedido.id_producto}</td>
                <td>${fechaPedido.nombre_producto}</td>
                <td>${fechaPedido.cantidad_producto}</td>
                <td>${fechaFormat}</td>
            </tr>`;
        }
        document.getElementById('cuerpoTabla').innerHTML = salida;
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
}

