import configCLI from './cli.json';

interface Template {
  id: number;
  name: string;
}

export function getTemplateByID(id: number): Template | undefined {
  return configCLI.templates.find((template) => template.id === id);
}
