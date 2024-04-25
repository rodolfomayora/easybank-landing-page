import { resolvePublicPath } from "#utils/resolvePublicPath";

type PublicSources = {
  webpSource: string,
  pngSource: string,
  jpgSource: string,
  jpegSource: string,
}

export function resolvePublicSources (publicSource: string): PublicSources {
  const resolvedSource = resolvePublicPath(publicSource);
  return {
    webpSource: `${resolvedSource}.webp`,
    pngSource : `${resolvedSource}.png`,
    jpgSource : `${resolvedSource}.jpg`,
    jpegSource: `${resolvedSource}.jpeg`,
  }
}