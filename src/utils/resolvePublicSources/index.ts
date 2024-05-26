// import { resolvePath } from '#utils/resolvePath';
import { basePublicPath } from '#config/env';

type PublicSources = {
  webpSource: string,
  pngSource: string,
  jpgSource: string,
  jpegSource: string,
}

export function resolvePublicSources (publicSource: string): PublicSources {
  const [source] = publicSource.split('.');
  // const resolvedSource = resolvePath(source);
  const resolvedSource = basePublicPath + source;
  return {
    webpSource: `${resolvedSource}.webp`,
    pngSource : `${resolvedSource}.png`,
    jpgSource : `${resolvedSource}.jpg`,
    jpegSource: `${resolvedSource}.jpeg`,
  }
}