import { basePublicPath } from "#config/env";

export function navigateTo (pathName: string): string {
  return basePublicPath + pathName;
}