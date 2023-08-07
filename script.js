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
                <td>${fechaPedido.cantidad_producto}/u</td>
                <td>${fechaFormat}</td>
            </tr>`;
            }
            document.getElementById('cuerpoTabla').innerHTML = salida;
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}

async function buscarArticulo() {

    try {
        const id = document.getElementById('id_articulo').value

        fetch(`http://localhost:3000/api/fechas_pedidos/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                document.getElementById('id_articulo').innerText = `${data.id_producto}`;
                document.getElementById('nombre_articulo').innerText = `${data.nombre_producto}`;
                document.getElementById('cantidad_articulo').innerText = `${data.cantidad_producto}`;
                document.getElementById('fecha_delPedido').innerText = `${data.fecha_pedido}`;
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function agregarArticulo() {
    try {
        let id = document.getElementById('id_articulo').value
        let nombre = document.getElementById('nombre_articulo').value;
        let cantidad = document.getElementById('cantidad_articulo').value;
        let fecha = document.getElementById('fecha_delPedido').value;

        fetch(`http://localhost:3000/api/fechas_pedidos/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_producto: id,
                nombre_producto: nombre,
                cantidad_producto: cantidad,
                fecha_pedido: fecha
            })
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                alert('Añadido correctamente')
                mostrarDatos()
                location.reload()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function modificarArticulo() {

    let id = document.getElementById('id_articulo').value

    if (id === "") {
        alert('Campo ID vacío')
        return;
    }

    try {
        let id = document.getElementById('id_articulo').value
        let nombre = document.getElementById('nombre_articulo').value;
        let cantidad = document.getElementById('cantidad_articulo').value;
        let fecha = document.getElementById('fecha_delPedido').value;

        fetch(`http://localhost:3000/api/fechas_pedidos/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_producto: id,
                nombre_producto: nombre,
                cantidad_producto: cantidad,
                fecha_pedido: fecha
            })
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                alert('Modificado correctamente')
                mostrarDatos()
                location.reload()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function borrarArticulo() {
    let id = document.getElementById('id_articulo').value

    if (id === "") {
        alert('Campo ID vacío')
        return;
    }

    try {
        fetch(`http://localhost:3000/api/fechas_pedidos/${id}`, {
            method: 'DELETE',
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                location.reload()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

function limpiarDatos() {
    location.reload()
}






