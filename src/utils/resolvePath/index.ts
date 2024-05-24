import { basePublicPath } from '#config/env';

export function resolvePath (pathName: string): string {
  return basePublicPath + pathName;
}