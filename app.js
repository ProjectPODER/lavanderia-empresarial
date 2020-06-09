const clean = require('./lib/laundry');
const simple = require('./lib/simple');
const isCompany = require('./lib/company');
const companyType = require('./lib/companyType');
const cleanCountry = require('./lib/countries');

module.exports = { launder: clean, simpleName: simple, isCompany: isCompany, companyType: companyType, cleanCountry: cleanCountry };
