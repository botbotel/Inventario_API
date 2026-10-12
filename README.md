# Inventory API — Node.js / Express / MySQL

> **Legacy backend learning project.** Retained as part of my development history.

Small REST API for inventory and order-date management built with **Node.js, Express and MySQL**.

## Features

- inventory listing
- product lookup by ID
- create / update / delete inventory products
- order-date listing
- order lookup by product
- create / update / delete order records
- parameterized SQL queries
- CORS-enabled Express server

## Stack

Node.js · Express · MySQL · mysql2

## Configuration

Database credentials are read from environment variables:

```bash
DB_HOST=127.0.0.1
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database
```

Then install dependencies and start the API:

```bash
npm install
npm start
```

The server runs on port `3000` by default.

## Example routes

```text
GET    /api/producto_inventario
GET    /api/producto_inventario/:id_Iproducto
POST   /api/producto_inventario
PUT    /api/producto_inventario/:id_Iproducto
DELETE /api/producto_inventario/:id_Iproducto

GET    /api/fechas_pedidos
GET    /api/fechas_pedidos/:id_producto
POST   /api/fechas_pedidos
PUT    /api/fechas_pedidos/:id_producto
DELETE /api/fechas_pedidos/:id_producto
```

## Status

This is an older project and does not represent the architecture of my current applications. It remains useful as an early example of REST API and SQL work.

For current work, see my **[GitHub profile](https://github.com/botbotel)**.
