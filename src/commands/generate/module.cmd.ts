import program from 'commander';
import generateModule from '../../actions/generate.action';

program
  .command('generate <type> [name]')
  .alias('g')
  .description('Create a new Node.js module for the application')
  .action(generateModule);
