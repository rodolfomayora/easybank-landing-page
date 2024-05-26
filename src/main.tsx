import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from '#routers/routes';
import { basePublicPath } from '#config/env';
import './styles/global.scss';

export const createRoot = ViteReactSSG({
  routes,
  basename: basePublicPath,
});
