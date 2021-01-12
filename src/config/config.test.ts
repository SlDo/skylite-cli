import mock from 'mock-fs';
import fse from 'fs-extra';
import { Config } from './config';

describe('config', () => {
  let config: Config;

  const project = {
    projectID: 'tested1',
    projectName: 'test',
    pathToProject: '/user/project',
    template: {
      lang: 1,
      type: 1,
    },
  };

  beforeEach(async () => {
    mock({
      '/user': {
        project: {},
      },
    });

    config = new Config('/user/config.json');
  });

  test('it should create a new config file', async () => {
    expect(await fse.pathExists('/user/config.json')).toBeTruthy();
  });

  test('it should add a new project', async () => {
    await config.addProject(project);

    expect(await fse.readJSON('/user/config.json')).toEqual([project]);
  });

  test('it should return the project from config file', async () => {
    await config.addProject(project);
    expect(await config.getProject('/user/project')).toEqual(project);
  });

  test('it should delete project from config file', async () => {
    await config.addProject(project);
    await config.deleteProject('/user/project');
    expect(await fse.readJSON('/user/config.json')).toEqual([]);
  });

  test('it should return true if the project exists', async () => {
    await config.addProject(project);
    expect(await config.isProjectExist('/user/project')).toBeTruthy();
  });

  afterEach(async () => {
    mock.restore();
  });
});
