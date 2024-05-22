import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from '#pages/HomePage';
import { ErrorPage } from '#pages/ErrorPage';
import { SandboxPage } from '#helpers/SandboxPage';
import { basePublicPath, isDevelopment } from '#config/env';

const router = createBrowserRouter([
  // {
  //   path: '/', // Root
  //   element: <HomePage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: basePublicPath, // Root '/'
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  // dev routes
  isDevelopment ? {
    path: basePublicPath + '/sandbox',
    element: <SandboxPage />,
  } : {},
]);

export function MainRouter () {
  return <RouterProvider router={router} />
}