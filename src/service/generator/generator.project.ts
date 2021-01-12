import ejs from 'ejs';
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
import {
  getFilesPaths, writeFile, copy, renameFile,
} from '../fs/fs';
import { config } from '../../index';
import { getTemplateByID } from '../../config/cli.config';
import { LangEnums } from '../../enums/lang.enums';
import getTemplatePath from '../utils/getTemplate';

interface ProjectOptions {
  lang: number;
  template: number;
}

export async function newProjectGenerator(projectName: string, pathProject: string, options: ProjectOptions) {
  const { template, lang } = options;

  const templatePath = getTemplatePath(getTemplateByID(template)!.name);

  if (templatePath == null) {
    return console.log(`
      ${chalk.redBright.bold('ERROR!')}
      ${chalk.whiteBright('The template is deleted or does not exist')}
    `);
  }

  const filterFilesDist = (src: string, dest: string) => {
    if (lang !== LangEnums.TS) {
      return !dest.includes('modules') && !dest.includes('tsconfig.json');
    }

    return !dest.includes('modules');
  };

  await copy(templatePath, pathProject, { filter: filterFilesDist, overwrite: false });

  const files: string[] = await getFilesPaths(pathProject, '**/*.(js|json)', ['!modules']);

  await Promise.all(
    files.map(async (file: string) => {
      const renderFile: string = await ejs.renderFile(file, { lang });
      const tsExtension = file.replace(/\.js$/i, '.ts');
      const writableFile = lang === LangEnums.TS ? tsExtension : file;
      if (lang === LangEnums.TS) {
        await renameFile(file, tsExtension);
      }
      await writeFile(writableFile, renderFile);
    }),
  );

  return config.addProject({
    projectID: uuidv4(),
    projectName,
    pathToProject: pathProject,
    template: {
      type: template,
      lang,
    },
  });
}
