/* eslint-env mocha */
const should = require('should');
const fs = require('fs');
const neatCsv = require('neat-csv');
const laundry = require('../lib/laundry');
const readFile = fs.createReadStream(`${__dirname}/data.csv`);
const readCsv = neatCsv(readFile);

describe('clean up the dirty laundry', () => {
  it('should generate the correct response', () => (
    readCsv.then(data => {
      data.forEach(o => {
        const clean = laundry(o.dirty);

        should(clean).eql(o.clean);
      });
    })
  ));
});
