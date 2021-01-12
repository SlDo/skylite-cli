import path from 'path';
import getModulePath from './getModule';

describe('getModulePath', () => {
  test('it should return the path to module', async () => {
    const expressTemplate = path.join(__dirname, '../generator', 'templates/express/modules/dal.js');
    expect(getModulePath('express', 'dal.js')).toBe(expressTemplate);
  });
});
