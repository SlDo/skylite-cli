#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var chalk_1 = __importDefault(require("chalk"));
var boxen_1 = __importDefault(require("boxen"));
var commander_1 = __importDefault(require("commander"));
require("./commands/commands");
var os_1 = __importDefault(require("os"));
var config_1 = require("./config/config");
var log = console.log;
commander_1.default.version('- Version: 0.0.1', '-v, -V, --version', 'output the current version');
log(boxen_1.default("\n  " + chalk_1.default.hex('#a7c5eb').bold('WELCOME!') + "                                   \n  " + chalk_1.default.whiteBright('Skylite CLI can help you to create a powerful Node.js application') + "\n", { padding: 1, borderColor: '#a7c5eb' }));
exports.config = new config_1.Config(os_1.default.homedir() + "/.slcli/config.json");
commander_1.default.parse(process.argv);
