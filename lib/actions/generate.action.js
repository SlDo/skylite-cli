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
var chalk_1 = __importDefault(require("chalk"));
var generator_modules_1 = require("../service/generator/generator.modules");
var index_1 = require("../index");
var module_enum_1 = require("../enums/module.enum");
function generateModule(moduleType, name) {
    return __awaiter(this, void 0, void 0, function () {
        var currentProject, pathToProject, _a, type, lang;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index_1.config.getProject(process.cwd().replace(/\\/g, '/'))];
                case 1:
                    currentProject = _b.sent();
                    if (currentProject == null) {
                        return [2 /*return*/, console.log("\n      " + chalk_1.default.redBright.bold('ERROR!') + "\n      " + chalk_1.default.whiteBright('The project doesn\'t exist in this path') + "\n    ")];
                    }
                    pathToProject = currentProject.pathToProject, _a = currentProject.template, type = _a.type, lang = _a.lang;
                    switch (true) {
                        case /c|controller/.test(moduleType):
                            return [2 /*return*/, generator_modules_1.newModule(pathToProject, module_enum_1.ModuleEnum.CONTROLLER, name, { type: type, lang: lang })];
                        case /d|dal/.test(moduleType):
                            return [2 /*return*/, generator_modules_1.newModule(pathToProject, module_enum_1.ModuleEnum.DAL, name, { type: type, lang: lang })];
                        default:
                            return [2 /*return*/, console.log('This command is not allowed')];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = generateModule;
