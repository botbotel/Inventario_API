const mysql = require('mysql2');

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

module.exports = { connection };