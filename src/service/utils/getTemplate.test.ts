import path from 'path';
import getTemplatePath from './getTemplate';

describe('getModulePath', () => {
  test('it should return the path to template', async () => {
    const expressTemplate = path.join(__dirname, '../generator', 'templates/express');
    expect(getTemplatePath('express')).toBe(expressTemplate);
  });
});
