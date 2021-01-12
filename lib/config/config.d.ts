interface ConfigParams {
    projectID: string;
    projectName: string;
    pathToProject: string;
    template: {
        type: number;
        lang: number;
    };
}
export declare class Config {
    jsonPath: string;
    constructor(jsonPath: string);
    addProject(project: ConfigParams): Promise<void>;
    getProject(pathToProject: string): Promise<any>;
    deleteProject(pathToProject: string): Promise<void>;
    write(content: ConfigParams[]): Promise<void | undefined>;
    get(): Promise<any>;
    isProjectExist(path: string): Promise<boolean>;
}
export {};
