"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateByID = void 0;
var cli_json_1 = __importDefault(require("./cli.json"));
function getTemplateByID(id) {
    return cli_json_1.default.templates.find(function (template) { return template.id === id; });
}
exports.getTemplateByID = getTemplateByID;
