import { LangEnums } from '../../enums/lang.enums';
import { EngineEnums } from '../../enums/engine.enums';
declare const _default: ({
    type: string;
    name: string;
    message: string;
    choices: {
        name: string;
        value: LangEnums;
    }[];
} | {
    type: string;
    name: string;
    message: string;
    choices: {
        name: string;
        value: EngineEnums;
    }[];
})[];
export default _default;
