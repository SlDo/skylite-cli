import mock from 'mock-fs';
import { getTemplateByID } from './cli.config';

jest.mock('./cli.json', () => ({
  templates: [
    {
      name: 'Test',
      id: 1,
    },
  ],
}), { virtual: true });

describe('cliConfig', () => {
  const cliConfig = JSON.stringify({
    templates: [
      {
        name: 'Test',
        id: 1,
      },
    ],
  });

  beforeEach(() => {
    mock({
      './cli.json': cliConfig,
    });
  });

  test('it should return the template options from config file', async () => {
    expect(await getTemplateByID(1)).toEqual({
      name: 'Test',
      id: 1,
    });
  });
});
