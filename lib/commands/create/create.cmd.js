"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var create_action_1 = __importDefault(require("../../actions/create.action"));
commander_1.default
    .command('create <name>')
    .alias('c')
    .description('Create a new Node.js application')
    .action(create_action_1.default);
