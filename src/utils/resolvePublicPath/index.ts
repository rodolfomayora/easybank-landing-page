import { basePublicPath } from '#config/env';

export function resolvePublicPath (publicSource: string): string {
  const publicPath = `${basePublicPath}${publicSource}`;
  return publicPath;
}