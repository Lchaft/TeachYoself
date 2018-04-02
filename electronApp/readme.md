Electron App Setup:

-https://electronjs.org/ -https://github.com/electron/electron-quick-start -https://electronjs.org/docs/tutorial/quick-start -https://electronjs.org/docs/tutorial/first-app

File Structure:
your-app/
├── package.json
├── main.js
└── index.html

run npm init to create the package.json file

In the package.json file add "start" to include electron
{
"name": "your-app",
"version": "0.1.0",
"main": "main.js",
"scripts": {
"start": "electron ."
}
}

run npm install --save-dev electron to install electron

"All APIs and features found in Electron are accessible through the electron module, which can be required like any other Node.js module"

In main.js start setting up the app:

* const electron = require('electron')

"The electron module exposes features in namespaces. As examples, the lifecycle of the application is managed through electron.app, windows can be created using the electron.BrowserWindow class. A simple main.js file might just wait for the application to be ready and open a window":

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
// Create the browser window.
win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))

}

app.on('ready', createWindow)

"The main.js should create windows and handle all the system events your application might encounter."

"Finally the index.html is the web page you want to show"

<!DOCTYPE html>

  <html>
    <head>
      <meta charset="UTF-8">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      We are using node <script>document.write(process.versions.node)</script>,
      Chrome <script>document.write(process.versions.chrome)</script>,
      and Electron <script>document.write(process.versions.electron)</script>.
    </body>
  </html>

to run the app, run npm start

Main + Render Processes:

"In Electron, the process that runs package.json's main script is called the main process. The script that runs in the main process can display a GUI by creating web pages. An Electron app always has one main process, but never more."

"Each web page in Electron runs in its own process, which is called the renderer process."

"The main process creates web pages by creating BrowserWindow instances. Each BrowserWindow instance runs the web page in its own renderer process. When a BrowserWindow instance is destroyed, the corresponding renderer process is also terminated."

Using Electron APIs:

Access Electron's APIs by requiring its included module: const electron = require('electron')
