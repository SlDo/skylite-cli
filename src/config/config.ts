import fse from 'fs-extra';
import { isPathExist } from '../service/fs/fs';

interface ConfigParams {
  projectID: string;
  projectName: string;
  pathToProject: string;
  template: {
    type: number;
    lang: number;
  };
}

export class Config {
  // eslint-disable-next-line no-useless-constructor
  constructor(public jsonPath: string) {
    if (!isPathExist(jsonPath)) {
      fse.outputJSONSync(jsonPath, []);
    }
  }

  async addProject(project: ConfigParams) {
    const config = await this.get();
    const isExist = await this.isProjectExist(project.pathToProject);

    if (!isExist) {
      await this.write([...config, project]);
    }
  }

  async getProject(pathToProject: string) {
    const config = await this.get();

    return config.find((project: ConfigParams) => project.pathToProject === pathToProject);
  }

  async deleteProject(pathToProject: string) {
    const config = await this.get();

    await this.write(config.filter((project: ConfigParams) => project.pathToProject !== pathToProject));
  }

  async write(content: ConfigParams[]): Promise<void | undefined> {
    return fse.writeJSON(this.jsonPath, content);
  }

  async get() {
    return fse.readJSON(this.jsonPath);
  }

  async isProjectExist(path: string) {
    const config = await this.get();
    return config.findIndex((currentProject: ConfigParams) => currentProject.pathToProject === path) !== -1;
  }
}
