/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const express = require('express');
const clean = require('./lib/laundry');
const args = require('./lib/args');
const app = express();
const router = express.Router();
const port = process.env.PORT || 9000;

if (args.express) {
  router.get('/:string', (req, res) => {
    const string = req.params.string;

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write(clean(string));
    res.end();
  });

  app.use('/', router);
  app.listen(port);
  process.stdout.write(`port: ${port}\n`);
}

module.exports = clean;
