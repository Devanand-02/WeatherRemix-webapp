const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 900,
    height: 700
  });

  // Load the index.html of the app.
  win.loadFile('index.html');
};

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});