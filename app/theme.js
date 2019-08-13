import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 28,
      fontWeight: 500,
      color: '#fff',
      userSelect: 'none'
    },
    h5: {
      // textAlign: 'center',
      fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif"',
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.33,
      letterSpacing: '0em',
      userSelect: 'none'
    },
    subtitle1: {
      fontSize: 14,
      color: '#CBCBCB',
      userSelect: 'none'
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      color: '#fff',
      userSelect: 'none'
    },
    body1: {
      color: '#CBCBCB',
      userSelect: 'none'
    },
    body2: {
      color: '#CBCBCB',
      fontSize: 12,
      userSelect: 'none'
    }
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#16BEFD',
      dark: '#CBCBCB'
    },
    secondary: {
      main: '#5BC85B'
    },
    action: {
      green: { light: '#90fc8a', main: '#5BC85B', dark: '#1e962d' },
      blue: { light: '#6c8eff', main: '#1A61EF', dark: '#0038bb' }
    },
    success: {
      main: '#5BC85B'
    },
    error: {
      main: '#F66262'
    },
    background: {
      paper: '#525252'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CBCBCB'
    }
  },
  shape: {
    borderRadius: 8
  },
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'initial'
      },
      contained: {
        // boxShadow: 'none',
        '&:active': {
          // boxShadow: 'none',
        }
      }
    },
    MuiTabs: {
      root: {
        // marginLeft: theme.spacing(1)
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
        // backgroundColor: theme.palette.common.blue
      }
    },
    MuiOutlinedInput: {
      root: {
        borderWidth: 1,
        position: 'relative',
        '& $notchedOutline': {
          borderColor: '#707070'
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#777777',
          '@media (hover: none)': {
            borderColor: '#707070'
          }
        },
        '&$focused $notchedOutline': {
          borderColor: '#707070'
        }
      }
    },
    MuiTab: {
      root: {
        fontWeight: 400,
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0
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
    MuiIconButton: {
      root: {
        // padding: theme.spacing(1)
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    // MuiListItemText: {
    //   primary: {
    //     fontWeight: theme.typography.fontWeightMedium
    //   }
    // },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    // ...theme.mixins,
    toolbar: {
      minHeight: 48
    }
  }
});

export default theme;
