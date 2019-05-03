var _ = require('lodash');

function is_primitive(i) {
  return _.isNumber(i) || (_.isString(i) && !_.isEmpty(i));
}

function get_opts(key) {
  let config_url = require('config-url');

  let url = config_url.url(key)
    , { hostname : host, password, port, db } = url
    ;

  return _.pickBy({ host, password, port, db }, is_primitive);
}

module.exports = {
  options : get_opts
};