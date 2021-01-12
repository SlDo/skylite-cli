interface ProjectOptions {
    lang: number;
    template: number;
}
export declare function newProjectGenerator(projectName: string, pathProject: string, options: ProjectOptions): Promise<void>;
export {};
