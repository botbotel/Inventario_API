const { connection } = require('./connection');

module.exports = (app) => {

app.get('/api/fechas_pedidos', (req, res) => {
    connection.query('SELECT * FROM fecha_pedido', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


app.get('/api/fechas_pedidos/:id_producto', (req, res) => {
    const idProducto = req.params.id_producto;

    connection.query('SELECT * FROM fecha_pedido WHERE id_producto = ?', [idProducto], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return;
        }

        res.json(results[0]);
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

}
