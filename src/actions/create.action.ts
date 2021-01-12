import chalk from 'chalk';
import inquirer from 'inquirer';
import path from 'path';
import { isPathExist } from '../service/fs/fs';
import { config } from '../cli';
import createPrompt from '../commands/create/create.prompt';
import { newProjectGenerator } from '../service/generator/generator.project';

export default async function createCMD(projectName: string): Promise<void> {
  const projectPath: string = `${process.cwd().replace(/\\/g, '/')}/${projectName}`;

  if (isPathExist(path.join(process.cwd(), projectName))) {
    return console.log(`
      ${chalk.redBright.bold('ERROR!')}
      ${chalk.whiteBright('A project with this name has already been created in the current directory')}
    `);
  }

  if (!isPathExist(path.join(process.cwd(), projectName)) && await config.isProjectExist(projectPath)) {
    await config.deleteProject(projectPath);
  }

  const { lang, engine } = await inquirer.prompt(createPrompt);

  return newProjectGenerator(projectName, projectPath, {
    template: engine,
    lang,
  });
}
