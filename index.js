const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: 'sys'
});

connection.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos: ', error);
        return;
    }
    console.log('BASE DE DATOS CONECTADA');
});

app.get('/api/fechas_pedidos', (req, res) => {
    connection.query('SELECT * FROM fecha_pedido', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


app.post('/api/fechas_pedidos', (req, res) => {
    const { id_producto, nombre_producto, cantidad_producto, fecha_pedido } = req.body;

    connection.query('INSERT INTO fecha_pedido (id_producto, nombre_producto, cantidad_producto, fecha_pedido) VALUES (?, ?, ?, ?)', [id_producto, nombre_producto, cantidad_producto, fecha_pedido], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Producto creado con éxito', id: result.insertId });
    });
});

app.put('/api/fechas_pedidos/:id_producto', (req, res) => {
    const idProducto = req.params.id_producto;
    const { nombre_producto, cantidad_producto, fecha_pedido } = req.body;

    connection.query('UPDATE fecha_pedido SET nombre_producto = ?, cantidad_producto = ?, fecha_pedido = ? WHERE id_producto = ?', [nombre_producto, cantidad_producto, fecha_pedido, idProducto], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Producto modificado correctamente', affectedRows: result.affectedRows });
    });
});



app.delete('/api/fechas_pedidos/:id_producto', (req, res) => {
    const idProducto = req.params.id_producto;

    connection.query('DELETE FROM fecha_pedido WHERE id_producto = ?', [idProducto], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Línea eliminada con éxito', affectedRows: result.affectedRows });
    });
});




const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
