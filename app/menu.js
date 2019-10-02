import { Menu, app, shell } from 'electron';

export default class MenuBuilder {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu() {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment() {
    if (process.env.HIDE_DEV_TOOLS) {
      this.mainWindow.webContents.once('devtools-opened', () => {
        this.mainWindow.webContents.closeDevTools();
      });
    } else {
      this.mainWindow.openDevTools();
    }
  }

  buildDarwinTemplate() {
    const subMenuAbout = {
      label: 'Electron',
      submenu: [
        {
          label: 'About ElectronReact',
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        { label: 'Services', submenu: [] },
        { type: 'separator' },
        {
          accelerator: 'Command+H',
          label: 'Hide ElectronReact',
          selector: 'hide:'
        },
        {
          accelerator: 'Command+Shift+H',
          label: 'Hide Others',
          selector: 'hideOtherApplications:'
        },
        { label: 'Show All', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          },
          label: 'Quit'
        }
      ]
    };
    const subMenuEdit = {
      label: 'Edit',
      submenu: [
        { accelerator: 'Command+Z', label: 'Undo', selector: 'undo:' },
        { accelerator: 'Shift+Command+Z', label: 'Redo', selector: 'redo:' },
        { type: 'separator' },
        { accelerator: 'Command+X', label: 'Cut', selector: 'cut:' },
        { accelerator: 'Command+C', label: 'Copy', selector: 'copy:' },
        { accelerator: 'Command+V', label: 'Paste', selector: 'paste:' },
        {
          accelerator: 'Command+A',
          label: 'Select All',
          selector: 'selectAll:'
        }
      ]
    };
    const subMenuViewDev = {
      label: 'View',
      submenu: [
        {
          accelerator: 'Command+R',
          click: () => {
            this.mainWindow.webContents.reload();
          },
          label: 'Reload'
        },
        {
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
          label: 'Toggle Full Screen'
        },
        {
          accelerator: 'Alt+Command+I',
          click: () => {
            this.mainWindow.toggleDevTools();
          },
          label: 'Toggle Developer Tools'
        }
      ]
    };
    const subMenuViewProd = {
      label: 'View',
      submenu: [
        {
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
          label: 'Toggle Full Screen'
        }
      ]
    };
    const subMenuWindow = {
      label: 'Window',
      submenu: [
        {
          accelerator: 'Command+M',
          label: 'Minimize',
          selector: 'performMiniaturize:'
        },
        { accelerator: 'Command+W', label: 'Close', selector: 'performClose:' },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' }
      ]
    };
    const subMenuHelp = {
      label: 'Help',
      submenu: [
        {
          click() {
            shell.openExternal('http://electron.atom.io');
          },
          label: 'Learn More'
        },
        {
          click() {
            shell.openExternal(
              'https://github.com/atom/electron/tree/master/docs#readme'
            );
          },
          label: 'Documentation'
        },
        {
          click() {
            shell.openExternal('https://discuss.atom.io/c/electron');
          },
          label: 'Community Discussions'
        },
        {
          click() {
            shell.openExternal('https://github.com/atom/electron/issues');
          },
          label: 'Search Issues'
        }
      ]
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ? subMenuViewDev : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
  }

  buildDefaultTemplate() {
    const templateDefault = [
      {
        label: '&File',
        submenu: [
          {
            accelerator: 'Ctrl+O',
            label: '&Open'
          },
          {
            accelerator: 'Ctrl+W',
            click: () => {
              this.mainWindow.close();
            },
            label: '&Close'
          }
        ]
      },
      {
        label: '&View',
        submenu:
          process.env.NODE_ENV === 'development'
            ? [
                {
                  accelerator: 'Ctrl+R',
                  click: () => {
                    this.mainWindow.webContents.reload();
                  },
                  label: '&Reload'
                },
                {
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                  label: 'Toggle &Full Screen'
                },
                {
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    this.mainWindow.toggleDevTools();
                  },
                  label: 'Toggle &Developer Tools'
                }
              ]
            : [
                {
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                  label: 'Toggle &Full Screen'
                }
              ]
      },
      {
        label: 'Help',
        submenu: [
          {
            click() {
              shell.openExternal('http://electron.atom.io');
            },
            label: 'Learn More'
          },
          {
            click() {
              shell.openExternal(
                'https://github.com/atom/electron/tree/master/docs#readme'
              );
            },
            label: 'Documentation'
          },
          {
            click() {
              shell.openExternal('https://discuss.atom.io/c/electron');
            },
            label: 'Community Discussions'
          },
          {
            click() {
              shell.openExternal('https://github.com/atom/electron/issues');
            },
            label: 'Search Issues'
          }
        ]
      }
    ];

    return templateDefault;
  }
}
