const clean = require('./lib/laundry');
const simple = require('./lib/simple');
const isCompany = require('./lib/company');
const cleanCountry = require('./lib/countries');

module.exports = { launder: clean, simpleName: simple, isCompany: isCompany, cleanCountry: cleanCountry };
