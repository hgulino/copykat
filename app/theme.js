import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  mixins: {
    // ...theme.mixins,
    toolbar: {
      minHeight: 48
    }
  },
  overrides: {
    MuiAvatar: {
      root: {
        height: 32,
        width: 32
      }
    },
    MuiButton: {
      contained: {
        '&:active': {
          boxShadow: 'none'
        },
        '&:disabled': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          color: 'rgba(0, 0, 0, 0.4)'
        }
      },
      label: {
        textTransform: 'initial'
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiIconButton: {
      root: {
        // padding: theme.spacing(1)
      }
    },
    MuiListItemIcon: {
      root: {
        '& svg': {
          fontSize: 20
        },
        color: 'inherit',
        marginRight: 0
      }
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: '#707070'
        },
        '&$focused $notchedOutline': {
          borderColor: '#707070'
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          '@media (hover: none)': {
            borderColor: '#707070'
          },
          borderColor: '#777777'
        },
        borderWidth: 1,
        position: 'relative'
      }
    },
    MuiSkeleton: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }
    },
    MuiTab: {
      root: {
        fontWeight: 400,
        margin: '0 16px',
        minWidth: 0,
        textTransform: 'initial'
        // [theme.breakpoints.up('md')]: {
        //   minWidth: 0
        // }
      }
      // labelContainer: {
      //   padding: 0,
      //   [theme.breakpoints.up('md')]: {
      //     padding: 0
      //   }
      // }
    },
    // MuiListItemText: {
    //   primary: {
    //     fontWeight: theme.typography.fontWeightMedium
    //   }
    // },
    MuiTabs: {
      indicator: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        height: 3
        // backgroundColor: theme.palette.common.blue
      },
      root: {
        // marginLeft: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderRadius: 4
      },
      tooltipPlacementBottom: {
        margin: '3px 0px 0px 0px !important'
      }
    }
  },
  palette: {
    action: {
      blue: { dark: '#0038bb', light: '#6c8eff', main: '#1A61EF' },
      green: { dark: '#1e962d', light: '#90fc8a', main: '#5BC85B' }
    },
    background: {
      paper: '#525252'
    },
    error: {
      main: '#F66262'
    },
    primary: {
      dark: '#CBCBCB',
      light: '#63ccff',
      main: '#16BEFD'
    },
    secondary: {
      main: '#5BC85B'
    },
    success: {
      main: '#5BC85B'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CBCBCB'
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    body1: {
      color: '#CBCBCB',
      userSelect: 'none'
    },
    body2: {
      color: '#CBCBCB',
      fontSize: 12,
      userSelect: 'none'
    },
    h1: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 500,
      userSelect: 'none'
    },
    h5: {
      // textAlign: 'center',
      fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif"',
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.33,
      userSelect: 'none'
    },
    subtitle1: {
      color: '#CBCBCB',
      fontSize: 14,
      userSelect: 'none'
    },
    subtitle2: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 400,
      userSelect: 'none'
    },
    useNextVariants: true
  }
});

export default theme;
