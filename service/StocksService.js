'use strict';


/**
 * Deletes a product
 * This operation deletes a stock with a matching id from the stocks.json file
 *
 * id String The id of the stock.
 * no response value expected for this operation
 **/
exports.delete_stock = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a userstock
 * This operation deletes a userstock with a matching id from the userstocks.json file
 *
 * id String The id of the stock.
 * no response value expected for this operation
 **/
exports.delete_userstock = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets the user data
 * Retrieve the order information from the orders.json file.
 *
 * no response value expected for this operation
 **/
exports.get_stock = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new stock
 * This operation adds a new stock to the list of stocks found in the stocks.json file.
 *
 * body Stock A new stock object
 * no response value expected for this operation
 **/
exports.new_stock = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update the state of a stock
 * This operation updates the `state` of a  stock with a matching id from the stocks.json file.
 *
 * body Stock A new stock object
 * id String The id of the stock.
 * no response value expected for this operation
 **/
exports.update_stock = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

