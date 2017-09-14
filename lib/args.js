const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');

const optionDefinitions = [
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'express', alias: 'e', type: Boolean },
];

const args = commandLineArgs(optionDefinitions);
const sections = [
  {
    header: 'company laundry',
    content: 'Lavar las nombres de las empresas',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'help',
        description: 'Print this usage guide.',
      },
      {
        name: 'express',
        description: 'boot as an express rest verb.',
      },
    ],
  },
];

if (args.help) {
  process.stdout.write(getUsage(sections));
}

module.exports = args;
