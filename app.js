const clean = require('./lib/laundry');
const simple = require('./lib/simple');
const isCompany = require('./lib/company');

module.exports = { launder: clean, simpleName: simple, isCompany: isCompany };
