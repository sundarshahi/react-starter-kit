// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';
import { Queries } from '@testing-library/dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { AuthContext } from '@/app/context/auth/authContext/AuthContext';
import { AppLocale } from '@/app/context/locale/AppLocale.enum';
import { defaultLocale } from '@/app/context/locale/defaultLocale';
import { LocaleContext } from '@/app/context/locale/localeContext/LocaleContext';
import { ApiClientContextController } from '@/react-query/context/ApiClientContextController';
import { vi } from 'vitest';
import { ExtraRenderOptions, WrapperProps } from './types';

const Wrapper_ = ({ children, routerConfig = {} }: WrapperProps) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);
  const { routerPath = '/', currentPath = routerPath } = routerConfig;

  const rootRoute = createRootRoute({ component: () => <Outlet /> });

  const componentRoute = createRoute({
    path: routerPath,
    getParentRoute: () => rootRoute,
    component: () => children,
  });
  const router = createRouter({
    history: createMemoryHistory({
      initialEntries: [currentPath],
    }),
    routeTree: rootRoute.addChildren([componentRoute]),
  });

  return (
    <ApiClientContextController>
      <AuthContext.Provider
        value={{
          accessToken: null,
          refreshToken: null,
          expires: null,
          isAuthenticating: false,
          isAuthenticated: false,
          login: vi.fn(),
          logout: vi.fn(),
          user: undefined,
        }}
      >
        <IntlProvider onError={() => {}} defaultLocale={defaultLocale} locale={locale}>
          <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
            <RouterProvider router={router as never} />
          </LocaleContext.Provider>
        </IntlProvider>
      </AuthContext.Provider>
    </ApiClientContextController>
  );
};

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'> & ExtraRenderOptions,
): RenderResult;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q> & ExtraRenderOptions,
): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: (RenderOptions<Q> | Omit<RenderOptions, 'queries'>) & ExtraRenderOptions,
): RenderResult<Q> | RenderResult {
  const Wrapper = ({ children }: Pick<WrapperProps, 'children'>) => (
    <Wrapper_ routerConfig={options?.routerConfig}>{children}</Wrapper_>
  );

  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
