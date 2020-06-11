const laundry = require('../app');
const es = require('event-stream');
const CSV = require('csv-string');

process.stdin.setEncoding('utf8');

let queue = [];
// Read unique identifiers from lines
process.stdin
    .pipe(es.split())
    .pipe(es.mapSync(function (line) {
        if(line) queue.push(line);
    }));

process.stdin.on('end', () => {
        process.stdout.write(CSV.stringify( ["line", "launder(line)", "simpleName(launder(line))", "isCompany(line)", "companyType(line)"] ));
        queue.map( (line) => {
            process.stdout.write(CSV.stringify( [line, laundry.launder(line), laundry.simpleName(laundry.launder(line)), laundry.isCompany(line), laundry.companyType(line)] ));
        } );
    })


/* eslint-env mocha */
// const should = require('should');
// const fs = require('fs');
// const neatCsv = require('neat-csv');
// const laundry = require('../lib/laundry');
// const readFile = fs.createReadStream(`${__dirname}/data.csv`);
// const readCsv = neatCsv(readFile);
//
// describe('clean up the dirty laundry', () => {
//   it('String returned from `clean()` should match that declared in CSV', () => (
//     readCsv.then(data => {
//       data.forEach(o => {
//         const clean = laundry(o.dirty);
//
//         should(clean).eql(o.clean);
//       });
//     })
//   ));
// });
