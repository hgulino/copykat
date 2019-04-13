import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    subtitle1: {
      fontSize: 14,
      color: '#CBCBCB'
    },
    body1: {
      fontSize: 12,
      color: '#CBCBCB'
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
    error: {
      main: '#F66262'
    },
    background: {
      paper: '#525252',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CBCBCB'
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {

    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.blue,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};


render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <AppContainer>
            <NextRoot store={store} history={history} />
          </AppContainer>
        </MuiThemeProvider>
      </React.Fragment>,
      document.getElementById('root')
    );
  });
}
