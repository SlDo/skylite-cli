import path from 'path';
import { isPathExist } from '../fs/fs';

export default function getTemplatePath(templateName: string): string | undefined {
  const templatePath: string = path.join(__dirname, '../generator', 'templates', templateName.toLowerCase());

  if (!isPathExist(templatePath)) return undefined;

  return templatePath;
}
