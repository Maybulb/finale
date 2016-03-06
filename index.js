var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800, height:450,
    frame:false, resizable: false
  })
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null
  });
})
