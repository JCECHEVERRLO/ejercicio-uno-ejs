const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'My App';
const { readFile, writeFile } = require('./src/files.js');

const app = express();
const FILE_NAME = './db/products.json';

app.set("views", "./src/views");
app.set("view engine", "ejs");


app.get("/products", (req, res) => {
    
    
        const data = readFile(FILE_NAME);
        // res.render('productos', {products:data});
        const minPrice = parseFloat(req.query.min_price) || 0;
        const filteredProducts = data.filter(product => product.price > minPrice);
    
        res.render('productos', { products: filteredProducts });
    

});

app.listen(PORT, () =>
console.log(`${APP_NAME} is running on http://localhost:${PORT}`)
  );

 