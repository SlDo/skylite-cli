"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("../fs/fs");
function getTemplatePath(templateName) {
    var templatePath = path_1.default.join(__dirname, '../generator', 'templates', templateName.toLowerCase());
    if (!fs_1.isPathExist(templatePath))
        return undefined;
    return templatePath;
}
exports.default = getTemplatePath;
