const isDevelopment = import.meta.env.DEV;

const { BASE_URL } = import.meta.env;
const isRoot = BASE_URL === '/';
const basePublicPath = isRoot ? '' : BASE_URL;

export {
  basePublicPath,
  isDevelopment,
}