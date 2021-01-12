"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var generate_action_1 = __importDefault(require("../../actions/generate.action"));
commander_1.default
    .command('generate <type> [name]')
    .alias('g')
    .description('Create a new Node.js module for the application')
    .action(generate_action_1.default);
