"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProjectGenerator = void 0;
var ejs_1 = __importDefault(require("ejs"));
var uuid_1 = require("uuid");
var chalk_1 = __importDefault(require("chalk"));
var fs_1 = require("../fs/fs");
var index_1 = require("../../index");
var cli_config_1 = require("../../config/cli.config");
var lang_enums_1 = require("../../enums/lang.enums");
var getTemplate_1 = __importDefault(require("../utils/getTemplate"));
function newProjectGenerator(projectName, pathProject, options) {
    return __awaiter(this, void 0, void 0, function () {
        var template, lang, templatePath, filterFilesDist, files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    template = options.template, lang = options.lang;
                    templatePath = getTemplate_1.default(cli_config_1.getTemplateByID(template).name);
                    if (templatePath == null) {
                        return [2 /*return*/, console.log("\n      " + chalk_1.default.redBright.bold('ERROR!') + "\n      " + chalk_1.default.whiteBright('The template is deleted or does not exist') + "\n    ")];
                    }
                    filterFilesDist = function (src, dest) {
                        if (lang !== lang_enums_1.LangEnums.TS) {
                            return !dest.includes('modules') && !dest.includes('tsconfig.json');
                        }
                        return !dest.includes('modules');
                    };
                    return [4 /*yield*/, fs_1.copy(templatePath, pathProject, { filter: filterFilesDist, overwrite: false })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, fs_1.getFilesPaths(pathProject, '**/*.(js|json)', ['!modules'])];
                case 2:
                    files = _a.sent();
                    return [4 /*yield*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                            var renderFile, tsExtension, writableFile;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, ejs_1.default.renderFile(file, { lang: lang })];
                                    case 1:
                                        renderFile = _a.sent();
                                        tsExtension = file.replace(/\.js$/i, '.ts');
                                        writableFile = lang === lang_enums_1.LangEnums.TS ? tsExtension : file;
                                        if (!(lang === lang_enums_1.LangEnums.TS)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, fs_1.renameFile(file, tsExtension)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, fs_1.writeFile(writableFile, renderFile)];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 3:
                    _a.sent();
                    return [2 /*return*/, index_1.config.addProject({
                            projectID: uuid_1.v4(),
                            projectName: projectName,
                            pathToProject: pathProject,
                            template: {
                                type: template,
                                lang: lang,
                            },
                        })];
            }
        });
    });
}
exports.newProjectGenerator = newProjectGenerator;
