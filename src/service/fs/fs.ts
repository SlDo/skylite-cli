import fse from 'fs-extra';
import globby from 'globby';
import path from 'path';

export function createFile(filePath: string, fileName: string, content: string = '') {
  return fse.outputFile(path.join(filePath, fileName), content);
}

export function copy(fromPath: string, newPath: string, params?: fse.CopyOptions): Promise<void> {
  return fse.copy(fromPath, newPath, params);
}

export function isPathExist(folderPath: string) {
  return fse.existsSync(folderPath);
}

export function writeFile(file: string, data: string) {
  return fse.outputFile(file, data);
}

export function renameFile(dest: string, src: string) {
  return fse.rename(dest, src);
}

export async function getFilesPaths(filePath: string, pattern: string, files?: string[]): Promise<string[]> {
  return globby(`${filePath}/${pattern}`, {
    expandDirectories: {
      files,
    },
  });
}
