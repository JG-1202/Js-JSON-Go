const Resolver = require('../../services/resolver');

/**
 * Finds all values and paths from objects specified query path
 * @param {Object} object - object/array from which value should be retrieved.
 * @param {any} path - string or array representation of path to set.
 * @param {Object} functions - object of functions that can be called within query.
 * @param {Object} settings - object with settings.
 * @returns {Array} returns array of objects with value/path property
 * that match the specified path with logical checks
 */
const findAll = (object, path, functions, settings) => {
  const resolver = new Resolver({ functions, settings: { ...settings, limit: 0 } });
  return resolver.find(object, path);
};

module.exports = findAll;