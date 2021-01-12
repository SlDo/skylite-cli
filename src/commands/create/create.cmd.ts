import program from 'commander';
import createCmd from '../../actions/create.action';

program
  .command('create <name>')
  .alias('c')
  .description('Create a new Node.js application')
  .action(createCmd);
