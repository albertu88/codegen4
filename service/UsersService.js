'use strict';


/**
 * Deletes an user
 * This operation deletes an user with a matching id from the users.json file
 *
 * id String The id of the order.
 * no response value expected for this operation
 **/
exports.delete_user = function(id) {
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
exports.get_users = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new user
 * This operation adds a new user to the list of orders found in the orders.json file.
 *
 * body User A new user object
 * no response value expected for this operation
 **/
exports.log_in = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new user
 * This operation adds a new user to the list of orders found in the orders.json file.
 *
 * body User A new user object
 * no response value expected for this operation
 **/
exports.new_user = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update the state of an user
 * This operation updates the `state` of an user with a matching id from the orders.json file.
 *
 * body User A new user object
 * id String The id of the user.
 * no response value expected for this operation
 **/
exports.update_user = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

