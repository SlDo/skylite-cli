import mock from 'mock-fs';
import fse from 'fs-extra';

import {
  createFile, copy, isPathExist, writeFile, getFilesPaths,
} from './fs';

beforeEach(async () => {
  mock({
    '/test': {
      copy: {
        'copy.txt': 'this file was copied',
      },
      copyDest: {},
    },
  });
});

describe('fs module', () => {
  test('it should create a new file with content', async () => {
    const content: string = 'Hello from jest!';
    await createFile('/test', 'test.txt', content);

    expect(await fse.readFile('/test/test.txt', 'utf-8')).toBe(content);
  });

  test('it should copy files from path', async () => {
    await copy('/test/copy', '/test/copyDest');

    expect(fse.existsSync('/test/copyDest/copy.txt')).toBeTruthy();
  });

  test('it should return true if a path exist', async () => {
    expect(await isPathExist('/test')).toBeTruthy();
  });

  test('it should write a content in some file', async () => {
    const content = 'Jest!';
    await writeFile('/test/jest.txt', content);

    expect(await fse.readFile('/test/jest.txt', 'utf-8')).toBe(content);
  });

  test('it should return files path in some folder', async () => {
    expect(await getFilesPaths('/test/copy', '**/*.txt')).toContain('/test/copy/copy.txt');
  });
});

afterEach(async () => {
  mock.restore();
});
