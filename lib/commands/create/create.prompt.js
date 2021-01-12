"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lang_enums_1 = require("../../enums/lang.enums");
var engine_enums_1 = require("../../enums/engine.enums");
exports.default = [
    {
        type: 'list',
        name: 'lang',
        message: 'What language do you want to use?',
        choices: [
            { name: 'TypeScript', value: lang_enums_1.LangEnums.TS },
            { name: 'JavaScript', value: lang_enums_1.LangEnums.JS },
        ],
    },
    {
        type: 'list',
        name: 'engine',
        message: 'What engine do you want to use?',
        choices: [
            { name: 'Express', value: engine_enums_1.EngineEnums.EXPRESS },
        ],
    },
];
