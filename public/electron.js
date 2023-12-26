const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;
function createWindow() {
    win = new BrowserWindow({
        width:1000,
        height:800,
        maxHeight:1024,
        maxWidth: 900,
        title:'Automated Question Randomizer',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation:false
        }
    })

    win.removeMenu();
    // console.log(__dirname);
    console.log(path.join(__dirname, "../build/index.html"));
    win.loadFile(path.join(__dirname, "../build/index.html"))
    win.webContents.openDevTools();
}

app.on("ready", createWindow);

// app.on('window-all-closed', ()=> {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// });

// app.on('activate', ()=> {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// });