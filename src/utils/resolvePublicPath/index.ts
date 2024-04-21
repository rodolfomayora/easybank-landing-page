export function resolvePublicPath (publicSource: string): string {
  const publicPath = `${import.meta.env.BASE_URL}${publicSource}`;
  return publicPath;
}