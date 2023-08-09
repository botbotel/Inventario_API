const { connection } = require('./connection');

module.exports = app => {

app.get('/api/producto_inventario', (req, res) => {
    connection.query('SELECT * FROM producto_inventario', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});


app.get('/api/producto_inventario/:id_Iproducto', (req, res) => {
    const idIProducto = req.params.id_Iproducto;

    connection.query('SELECT * FROM producto_inventario WHERE id_Iproducto = ?', [idIProducto], (err, results) => {
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


app.post('/api/producto_inventario', (req, res) => {
    const { id_Iproducto, nombre_Iproducto, cantidad_Iproducto} = req.body;

    connection.query('INSERT INTO producto_inventario (id_Iproducto, nombre_Iproducto, cantidad_Iproducto) VALUES (?, ?, ?)', [id_Iproducto, nombre_Iproducto, cantidad_Iproducto], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({ message: 'Producto creado con éxito', id: result.insertId });
    });
});


app.put('/api/producto_inventario/:id_Iproducto', (req, res) => {
    const idIProducto = req.params.id_Iproducto;
    const { nombre_Iproducto, cantidad_Iproducto } = req.body;

    connection.query('UPDATE producto_inventario SET nombre_Iproducto = ?, cantidad_Iproducto = ? WHERE id_Iproducto = ?', [nombre_Iproducto, cantidad_Iproducto, idIProducto], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Producto modificado correctamente', affectedRows: result.affectedRows });
    });
});


app.delete('/api/producto_inventario/:id_Iproducto', (req, res) => {
    const idIProducto = req.params.id_Iproducto;

    connection.query('DELETE FROM producto_inventario WHERE id_Iproducto = ?', [idIProducto], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Línea eliminada con éxito', affectedRows: result.affectedRows });
    });
});

}
