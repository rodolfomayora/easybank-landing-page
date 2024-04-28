import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from '#pages/HomePage';
import { ErrorPage } from '#pages/ErrorPage';
import { SandboxPage } from '#helpers/SandboxPage';
import { basePublicPath } from '#config/env';

const router = createBrowserRouter([
  {
    path: '/', // Root
    errorElement: <ErrorPage />,
  },
  {
    path: basePublicPath + '/',
    element: <HomePage />,
  },
  {
    path: basePublicPath + '/test',
    element: <HomePage />,
  },

  // only dev routes
  import.meta.env.DEV ? {
    path: basePublicPath + '/sandbox',
    element: <SandboxPage />,
  } : {},
]);

export function MainRouter () {
  return <RouterProvider router={router} />
}