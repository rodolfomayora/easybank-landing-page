import { HomePage } from '#pages/HomePage';
import { ErrorPage } from '#pages/ErrorPage';
import { SandboxPage } from '#helpers/SandboxPage';
import { basePublicPath } from '#config/env';

export function App () {
  const { pathname } = window.location;

  const pages = {
    [`${basePublicPath}`]: <HomePage />,
    [`${basePublicPath}/`]: <HomePage />,
  }

  if (import.meta.env.DEV) pages[`${basePublicPath}/sandbox`] = <SandboxPage />;

  const defaultErrorPage = <ErrorPage />;
  const page = pages[pathname] ?? defaultErrorPage;
  return  page;
}