import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import MuiTheme from '../app/theme';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';

const theme = create({
  base: 'dark',
  colorPrimary: '#FF4785',
  colorSecondary: '#1EA7FD',
  appBg: '#383838'
});
addParameters({ options: { theme } });

const MuiDecorator = storyFn => (
  <MuiThemeProvider theme={MuiTheme}>
    {storyFn()}
  </MuiThemeProvider>
);
addDecorator(MuiDecorator);

// automatically import all files ending in *.stories.js or *.stories.mdx
const req = require.context('../app', true, /\.stories\.(js)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
