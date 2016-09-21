var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var path = require('path');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  var basePath = path.dirname(process.mainModule.filename);
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + basePath + '/../renderer/html/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
