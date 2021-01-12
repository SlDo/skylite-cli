import { LangEnums } from '../../enums/lang.enums';
import { EngineEnums } from '../../enums/engine.enums';

export default [
  {
    type: 'list',
    name: 'lang',
    message: 'What language do you want to use?',
    choices: [
      { name: 'TypeScript', value: LangEnums.TS },
      { name: 'JavaScript', value: LangEnums.JS },
    ],
  },
  {
    type: 'list',
    name: 'engine',
    message: 'What engine do you want to use?',
    choices: [
      { name: 'Express', value: EngineEnums.EXPRESS },
    ],
  },
];
