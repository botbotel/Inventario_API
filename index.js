const express = require('express');
const app = express();

const { connection } = require('./connection');

const cors = require('cors'); 

app.use(express.json());
app.use(cors());

const inventarioRoute = require("./inventario")
inventarioRoute(app)

const pedidosRoute = require("./pedidos")
pedidosRoute(app)


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
