'use strict';


/**
 * Gets the userstock data
 * Retrieve the order information from the userstocks.json file.
 *
 * no response value expected for this operation
 **/
exports.get_userstock = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new userstock
 * This operation adds a new userstock to the list of userstock found in the userstocks.json file.
 *
 * body Userstock A new userstock product
 * no response value expected for this operation
 **/
exports.new_userstock = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update the state of a stock
 * This operation updates the `state` of a  userstock with a matching id from the userstocks.json file.
 *
 * body Userstock A new userstock object
 * id String The id of the userstock.
 * no response value expected for this operation
 **/
exports.update_userstock = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

