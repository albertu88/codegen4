'use strict';

var utils = require('../utils/writer.js');
var Userstock = require('../service/UserstockService');

module.exports.get_userstock = function get_userstock (req, res, next) {
  Userstock.get_userstock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_userstock = function new_userstock (req, res, next, body) {
  Userstock.new_userstock(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update_userstock = function update_userstock (req, res, next, body, id) {
  Userstock.update_userstock(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
