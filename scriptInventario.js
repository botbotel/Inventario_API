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

async function buscarArticuloInventariro() {

    let id = document.getElementById('id_Iarticulo').value
    if (id === "") {
        alert('Campo ID vacío')
        return;
    }

    try {
        const id = document.getElementById('id_Iarticulo').value

        fetch(`http://localhost:3000/api/producto_inventario/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                document.getElementById('id_Iarticulo').innerText = `${data.id_Iproducto}`;
                document.getElementById('nombre_Iarticulo').innerText = `${data.nombre_Iproducto}`;
                document.getElementById('cantidad_Iarticulo').innerText = `${data.cantidad_Iproducto}`;

            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function agregarArticuloInventario() {

    let id = document.getElementById('id_Iarticulo').value
    if (id === "") {
        alert('Campo ID vacío')
        return;
    }
    try {
        let id = document.getElementById('id_Iarticulo').value
        let nombre = document.getElementById('nombre_Iarticulo').value;
        let cantidad = document.getElementById('cantidad_Iarticulo').value;

        fetch(`http://localhost:3000/api/producto_inventario/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_Iproducto: id,
                nombre_Iproducto: nombre,
                cantidad_Iproducto: cantidad,
            })
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                alert('Añadido correctamente')
                mostrarDatosInventario()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function modificarArticuloInventario() {

    let id = document.getElementById('id_Iarticulo').value

    if (id === "") {
        alert('Campo ID vacío')
        return;
    }

    try {
        let id = document.getElementById('id_Iarticulo').value
        let nombre = document.getElementById('nombre_Iarticulo').value;
        let cantidad = document.getElementById('cantidad_Iarticulo').value;

        fetch(`http://localhost:3000/api/producto_inventario/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_Iproducto: id,
                nombre_Iproducto: nombre,
                cantidad_Iproducto: cantidad,

            })
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                alert('Modificado correctamente')
                mostrarDatosInventario()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

async function borrarArticuloInventario() {
    let id = document.getElementById('id_Iarticulo').value

    if (id === "") {
        alert('Campo ID vacío')
        return;
    }

    try {
        fetch(`http://localhost:3000/api/producto_inventario/${id}`, {
            method: 'DELETE',
        })
            .then(respuesta => respuesta.json())
            .then(data => {
                alert('Estás seguro que quieres borrar?')
                mostrarDatosInventario()
            })
    } catch (error) {
        console.log('Se ha producido el siguiente error: ', error)
    }
}

function aparecerMenuInventario() {
    let editorButtom = document.getElementById('iconEditarInventario')
    let textareas = document.getElementById('modificarInventarioOFF')

    if (editorButtom) {
        textareas.classList.add('modificarInventarioON')
        editorButtom.style.rotate = '180deg'
    }
}