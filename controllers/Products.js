'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.delete_product = function delete_product (req, res, next, id) {
  Products.delete_product(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_products = function get_products (req, res, next) {
  Products.get_products()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_product = function new_product (req, res, next, body) {
  Products.new_product(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_product = function update_product (req, res, next, body, id) {
  Products.update_product(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
