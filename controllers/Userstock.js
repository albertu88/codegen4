'use strict';

var utils = require('../utils/writer.js');
var Userstock = require('../service/UserstockService');

module.exports.get_userstock = function get_userstock (req, res, next) {
  pool.query('SELECT * FROM public."User_Stock" ORDER BY "idChart"', (error, results) => {    
    if(!results){
      res.status(200).json('No Rows Found')  
    }
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

module.exports.new_userstock = function new_userstock (req, res, next, body) {
  const { ChartName, IdUser,IdStock} = req.body;
  pool.query('INSERT INTO public."User_Stock"("ChartName", "IdUser", "IdStock")	VALUES ($1, $2, $3)', [ChartName, IdUser,IdStock], (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(result.rows[0])
   })
};

module.exports.update_userstock = function update_userstock (req, res, next, body, id) {
  const idUserStock = id
  const { ChartName, IdUser,IdStock } = req.body

  pool.query('UPDATE public."User_Stock" SET "ChartName"=$1, "IdUser"=$2, "IdStock"=$3	WHERE "idUser"=$4',
    [ ChartName, IdUser,IdStock, idUserStock],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User_Stock modified with ID: ${id}`)
    }
  )
};
