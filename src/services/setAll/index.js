const setAllHandler = require('../../handlers/set/setAll');
const loadDefaultSettings = require('../../settings/loadDefaultSettings');

/**
 * Sets all values on specified path
 * @param {object} obj - object
 * @param {any} path - string or array representation of path to set.
 * @param {any} val - value to be set at specified path.
 * @param {Object} functions - object of functions that can be called within query.
 * @param {Object} settings - object with settings.
 * @returns {object} object with newly set path in case that multiple logical checks
 * satisfy the first element will be set.
 */
const setAll = (object, path, value, functions, settings) => {
  const settingsToUse = loadDefaultSettings(settings);
  return setAllHandler(object, path, value, functions, settingsToUse);
};

module.exports = setAll;
