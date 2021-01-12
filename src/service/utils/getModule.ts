import path from 'path';
import getTemplatePath from './getTemplate';

export default function getModulePath(templateName: string, moduleName: string): string | undefined {
  const templatePath: string | undefined = getTemplatePath(templateName);

  if (templatePath == null) return undefined;

  return path.join(templatePath, 'modules', moduleName);
}
