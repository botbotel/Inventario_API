async function mostrarDatosInventario() {
    fetch('http://localhost:3000/api/producto_inventario/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(respuesta => respuesta.json())
        .then(data => {
            let salida = "";
            for (const productoInventario of data) {
                salida += `      
            <tr>
                <td>${productoInventario.id_Iproducto}</td>
                <td>${productoInventario.nombre_Iproducto}</td>
                <td>${productoInventario.cantidad_Iproducto} /u</td>
            </tr>`;
            }
            document.getElementById('cuerpoTablaInventario').innerHTML = salida;
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }