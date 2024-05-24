import { resolvePath } from '#utils/resolvePath';

type PublicSources = {
  webpSource: string,
  pngSource: string,
  jpgSource: string,
  jpegSource: string,
}

export function resolvePublicSources (publicSource: string): PublicSources {
  const [source] = publicSource.split('.');
  const resolvedSource = resolvePath(source);
  return {
    webpSource: `${resolvedSource}.webp`,
    pngSource : `${resolvedSource}.png`,
    jpgSource : `${resolvedSource}.jpg`,
    jpegSource: `${resolvedSource}.jpeg`,
  }
}