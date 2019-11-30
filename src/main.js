// main.js defines the electron window.

const { app, BrowserWindow } = require('electron');
const path = require('path');

// The window itself
let mainWindow;

// Create the main window
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1025,
        height: 680
    });

    // Load the react app into the window
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools
    mainWindow.webContents.openDevTools()

    // Kill the window when it is closed
    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

// Create the window when ready
app.on('ready', createWindow)

// Quit the app when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// Re-create the window when clicked on the dock (macos)
app.on('activate', function () {
    if (mainWindow === null) createWindow()
})