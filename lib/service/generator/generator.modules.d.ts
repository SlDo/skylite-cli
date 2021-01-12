interface Module {
    type: number;
    lang: number;
}
export declare function newModule(dest: string, moduleType: string, moduleName: string, options: Module): Promise<void>;
export {};
