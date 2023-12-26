const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width:1000,
        height:800,
        maxHeight:1024,
        maxWidth: 900,
        title:'Automated Multi-Choice Question Generator',
        // backgroundColor:'#7B435B',
        // frame:false,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation:false
        }
    })

    win.removeMenu();
    // win.loadURL('http://localhost:3000');
    // console.log(__dirname);
    console.log(path.join(__dirname, "../build/index.html"));
    win.loadFile(path.join(__dirname, "../build/index.html"))
    // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', ()=> {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});