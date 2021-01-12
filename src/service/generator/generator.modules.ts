import ejs from 'ejs';
import chalk from 'chalk';
import { createFile } from '../fs/fs';
import { getTemplateByID } from '../../config/cli.config';
import getModulePath from '../utils/getModule';

interface Module {
  type: number;
  lang: number;
}

export async function newModule(dest: string, moduleType: string, moduleName: string, options: Module): Promise<void> {
  const { type, lang } = options;

  const modulePath = getModulePath(getTemplateByID(type)!.name, `${moduleType}.js`);

  if (modulePath == null) {
    return console.log(`
      ${chalk.redBright.bold('ERROR!')}
      ${chalk.whiteBright('The template is deleted or does not exist')}
    `);
  }

  const controllerContent = await ejs.renderFile(modulePath, { lang, name: moduleName });
  return createFile(`${dest}/components/${moduleName}`, `${moduleName}.${moduleType}.${lang === 1 ? 'ts' : 'js'}`, controllerContent);
}
