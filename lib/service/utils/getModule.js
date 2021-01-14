"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var getTemplate_1 = __importDefault(require("./getTemplate"));
function getModulePath(templateName, moduleName) {
    var templatePath = getTemplate_1.default(templateName);
    if (templatePath == null)
        return undefined;
    return path_1.default.join(templatePath, 'modules', moduleName);
}
exports.default = getModulePath;
