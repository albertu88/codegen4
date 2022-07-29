'use strict';


/**
 * Deletes a product
 * This operation deletes a product with a matching id from the products.json file
 *
 * id String The id of the product.
 * no response value expected for this operation
 **/
exports.delete_product = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets the product data
 * Retrieve the product information from the products.json file.
 *
 * no response value expected for this operation
 **/
exports.get_products = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new product
 * This operation adds a new product to the list of poducts found in the products.json file.
 *
 * body Product A new user product
 * no response value expected for this operation
 **/
exports.new_product = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update the state of an user
 * This operation updates the `state` of a product with a matching id from the products.json file.
 *
 * body Product A new user object
 * id String The id of the product.
 * no response value expected for this operation
 **/
exports.update_product = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

