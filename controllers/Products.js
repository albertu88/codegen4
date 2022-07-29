'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.delete_product = function delete_product (req, res, next, id) {
  const idProduct = id

  pool.query('DELETE FROM public."Product" WHERE "idProduct" = $1', [idProduct], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Product deleted with ID: ${id}`)
  })
};

module.exports.get_products = function get_products (req, res, next) {
  pool.query('SELECT "idProduct", "nameProduct", price FROM public."Product"', (error, results) => {    
    if(!results){
      res.status(200).json('No Rows Found')  
    }
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

module.exports.new_product = function new_product (req, res, next, body) {
  const nameProduct = req.body;
  pool.query('INSERT INTO public."Product"( "nameProduct")	VALUES ($1)', [nameProduct], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(result.rows[0])
   })
};

module.exports.update_product = function update_product (req, res, next, body, id) {
  const idProduct= id
  const nameProduct = req.body

  pool.query('UPDATE public."Product" SET "nameProduct"=$1	WHERE "idProduct"=$2',
    [ idProduct, nameProduct],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Product modified with ID: ${id}`)
    }
  )
};
