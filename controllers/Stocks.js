'use strict';

var utils = require('../utils/writer.js');
var Stocks = require('../service/StocksService');

module.exports.delete_stock = function delete_stock (req, res, next, id) {
  Stocks.delete_stock(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delete_userstock = function delete_userstock (req, res, next, id) {
  Stocks.delete_userstock(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_stock = function get_stock (req, res, next) {
  Stocks.get_stock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_stock = function new_stock (req, res, next, body) {
  Stocks.new_stock(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_stock = function update_stock (req, res, next, body, id) {
  Stocks.update_stock(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
