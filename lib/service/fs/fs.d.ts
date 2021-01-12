import fse from 'fs-extra';
export declare function createFile(filePath: string, fileName: string, content?: string): Promise<void>;
export declare function copy(fromPath: string, newPath: string, params?: fse.CopyOptions): Promise<void>;
export declare function isPathExist(folderPath: string): boolean;
export declare function writeFile(file: string, data: string): Promise<void>;
export declare function renameFile(dest: string, src: string): Promise<void>;
export declare function getFilesPaths(filePath: string, pattern: string, files?: string[]): Promise<string[]>;
