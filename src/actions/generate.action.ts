import chalk from 'chalk';
import { newModule } from '../service/generator/generator.modules';
import { config } from '../cli';
import { ModuleEnum } from '../enums/module.enum';

export default async function generateModule(moduleType: string, name: string): Promise<void> {
  const currentProject = await config.getProject(process.cwd().replace(/\\/g, '/'));

  if (currentProject == null) {
    return console.log(`
      ${chalk.redBright.bold('ERROR!')}
      ${chalk.whiteBright('The project doesn\'t exist in this path')}
    `);
  }

  const { pathToProject, template: { type, lang } } = currentProject;

  switch (true) {
    case /c|controller/.test(moduleType):
      return newModule(pathToProject, ModuleEnum.CONTROLLER, name, { type, lang });
    case /d|dal/.test(moduleType):
      return newModule(pathToProject, ModuleEnum.DAL, name, { type, lang });
    default:
      return console.log('This command is not allowed');
  }
}
