import electron, { Menu } from 'electron';
import path from 'path';
import url from 'url';
import isDevelopment from 'electron-is-dev';
import * as cmdline from 'node-cmdline-parser'

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=2048')

const createWindow = () => {

  if (process.platform === 'darwin')
    buildMenu();

  mainWindow = new BrowserWindow({
    icon: __dirname + '/assets/images/logo.ico',
    width: 1280,
    height: 880,
    minWidth: 768,
    minHeight: 520,
    title: ""
  });

  mainWindow.webContents.on('will-navigate', ev => {
    ev.preventDefault()
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  if (isDevelopment || cmdline.keyexists('debug')) {
      mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit()
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function buildMenu() {
  const template = [
    {
      label: 'Editar',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {type: 'separator'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'pasteandmatchstyle'},
        {role: 'delete'},
        {role: 'selectall'}
      ]
    },
    {
      label: 'Visualizar',
      submenu: [
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'Janela',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {role: 'about'}
      ]
    }
  ]

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services', submenu: []},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ]
    })

    // Edit menu
    template[1].submenu.push(
      {type: 'separator'},
      {
        label: 'Speech',
        submenu: [
          {role: 'startspeaking'},
          {role: 'stopspeaking'}
        ]
      }
    )

    // Window menu
    template[3].submenu = [
      {role: 'close'},
      {role: 'minimize'},
      {role: 'zoom'},
      {type: 'separator'},
      {role: 'front'}
    ]
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
