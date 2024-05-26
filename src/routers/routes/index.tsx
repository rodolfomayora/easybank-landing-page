import type { RouteRecord } from 'vite-react-ssg';
import { HomePage } from '#pages/HomePage';
import { ErrorPage } from '#pages/ErrorPage';
import { SandboxPage } from '#helpers/SandboxPage';
import { basePublicPath, isDevelopment } from '#config/env';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <HomePage />,
    entry: '#pages/HomePage/index.tsx',
    errorElement: <ErrorPage />,
  },
  {
    path: basePublicPath, // Root => '/'
    element: <HomePage />,
    entry: '#pages/HomePage/index.tsx',
    errorElement: <ErrorPage />,
  },

  // development routes
  isDevelopment ? {
    path: basePublicPath + '/sandbox',
    element: <SandboxPage />,
  } : {},
];