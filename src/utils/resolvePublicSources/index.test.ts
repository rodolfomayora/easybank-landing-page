import { resolvePublicSources } from '.';

describe('Function: resolvePublicSources', () => {
  test('Should returns an object with valid public source paths with different file extension', () => {
    const result = resolvePublicSources('/image.jpg');
    // BASE_URL is mocked globally to '/sub-path' on setupFile.ts
    expect(result).toEqual({
      webpSource: '/sub-path/image.webp',
      pngSource: '/sub-path/image.png',
      jpgSource: '/sub-path/image.jpg',
      jpegSource:'/sub-path/image.jpeg',
    });
  });
});