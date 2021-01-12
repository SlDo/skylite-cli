#!/usr/bin/env ts-node-script

import chalk from 'chalk';
import boxen from 'boxen';
import program from 'commander';
import './commands/commands';
import os from 'os';
import { Config } from './config/config';

const { log } = console;

program.version('- Version: 0.0.1', '-v, -V, --version', 'output the current version');

log(boxen(`
  ${chalk.hex('#a7c5eb').bold('WELCOME!')}                                   
  ${chalk.whiteBright('snCLI can help you to create a powerful Node.js application')}
`, { padding: 1, borderColor: '#a7c5eb' }));

export const config = new Config(`${os.homedir()}/.sncli/config.json`);

program.parse(process.argv);
