import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';


export const testemeuPlugin = createPlugin({
  id: 'testemeu',
  routes: {
    root: rootRouteRef,
  },
});

export const TestemeuPage = testemeuPlugin.provide(
  createRoutableExtension({
    name: 'TestemeuPage',
    component: () =>
      import('./components/ArgoCd').then(m => m.ArgoCd),
    mountPoint: rootRouteRef,
  }),
);
