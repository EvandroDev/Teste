import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { testemeuPlugin, TestemeuPage } from '../src/plugin';

createDevApp()
  .registerPlugin(testemeuPlugin)
  .addPage({
    element: <TestemeuPage />,
    title: 'Root Page',
    path: '/testemeu'
  })
  .render();
