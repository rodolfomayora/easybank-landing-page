import { resolvePath } from '.';

vi.mock('#config/env', () => ({
  basePublicPath: '/sub-path',
}));

describe('Fuction: resolvePath', () => {
  test('Should returns correct absolute path when the project is deployed on a subpath within a domain', () => {
    const path = resolvePath('/about');
    expect(path).toBe('/sub-path/about');
  });
});