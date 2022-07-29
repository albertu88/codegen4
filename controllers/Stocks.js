'use strict';

var utils = require('../utils/writer.js');
var Stocks = require('../service/StocksService');

module.exports.delete_stock = function delete_stock (req, res, next, id) {
  const idStock = id

  pool.query('DELETE FROM public."Stock" WHERE "idStock" = $1', [idUser], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Stock deleted with ID: ${id}`)
  })
};

module.exports.delete_userstock = function delete_userstock (req, res, next, id) {
  const IdChart = id

  pool.query('DELETE FROM public."User_Stock" WHERE "IdChart" = $1', [IdChart], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User_Stock deleted with ID: ${id}`)
  })
};

module.exports.get_stock = function get_stock (req, res, next) {
  pool.query('SELECT "idStock", "idProduct", "stockName"	FROM public."Stock"', (error, results) => {    
    if(!results){
      res.status(200).json('No Rows Found')  
    }
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

module.exports.new_stock = function new_stock (req, res, next, body) {
  const { idProduct, stockName} = req.body;
  pool.query('INSERT INTO public."Stock"("idProduct", "stockName")	VALUES ($1, $2)', [idProduct, stockName], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(result.rows[0])
   })
};

module.exports.update_stock = function update_stock (req, res, next, body, id) {
  const idStock= id
  const { idProduct, stockName} = req.body

  pool.query('UPDATE public."Stock" SET "idProduct"=$1, "stockName"=$2	WHERE "idUser"=$4',
    [ idProduct, stockName, idStock],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Stock modified with ID: ${id}`)
    }
  )
};
