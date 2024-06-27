import React from 'react';
import { Decorator, Parameters } from '@storybook/react';
import "@fontsource/montserrat";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Provider, light } from '../src/theme/theme';

const ThemeDecorator: Decorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <Provider theme={light}>{storyFn()}</Provider>
  </ThemeProvider>
)

export const decorators = [ThemeDecorator];

export const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#444',
        default: true,
      },
      {
        name: 'light',
        value: '#ddd',
      },
    ],
  },
  docs: {
    // theme,
  },
};