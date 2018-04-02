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

Using Node.js APIs:

Electron exposes full access to Node.js both in the main and the renderer process. This has two important implications:

* All APIs available in Node.js are available in Electron. Calling the following code from an Electron app works:

const fs = require('fs')

const root = fs.readdirSync('/')

// This will print all files at the root-level of the disk,
// either '/' or 'C:\'.
console.log(root)

* You can use Node.js modules in your application. Pick your favorite npm module. npm offers currently the world's biggest repository of open-source code – the ability to use well-maintained and tested code that used to be reserved for server applications is one of the key features of Electron.

As an example, to use the official AWS SDK in your application, you'd first install it as a dependency:

npm install --save aws-sdk

// A ready-to-use S3 Client
const S3 = require('aws-sdk/clients/s3')

Easy youtube video to follow along: https://www.youtube.com/watch?v=mr9Mtm_TRpw

A github repo I tried to follow: https://github.com/bradtraversy/electronshoppinglist/blob/master/main.js

documentation: https://electronjs.org/docs/README

example app to build: https://medium.freecodecamp.org/how-to-build-your-first-app-with-electron-41ebdb796930

a way too hard but cool music player app using electron + react: https://scotch.io/tutorials/build-a-music-player-with-react-electron-i-setup-basic-concepts

simple app ideas: https://electronjs.org/blog/simple-samples#url

sound machine app: https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658

"hear me type" app example: https://medium.freecodecamp.org/how-to-build-your-first-app-with-electron-41ebdb796930

Why did you choose this subject?

* I think desktop apps are cool and liked the idea of exploring new tech outside of our primarily class focus on browser apps

How were you first made aware of it?

* in class today

What problem does it solve?

* non-browser based apps
* off-line functionality
* auto updates
* different UX

What is it similar to, if anything?

* kind of similar to react

What is your opinion on the technology after having built something with it?

* i think i like it
* i would definitley need way more time to really understand how it works and form more of an opinion, but the barriers to create something pretty simple were low

What are the biggest conceptual hurdles (if any) you encountered when researching this?

* there are a alot of examples of how to create a "hello world app" but not that many for something slightly bigger and then lots of examples for big and complicated stuff that i'm not ready for yet
* trying to figure out what resources to use was hard as there were lots of sources
* i was following one tutorial on basic setup and then started looking at another, but then they conflicted each other and i didn't know enough about how the language works to figure out what parts of which to take

What resources do you recommend for interested students?

* alot of the URLs above were helpful to me

What article or forum was most helpful to you in learning this?

* for me personally i think reading the documentation was the most helpful base to take in info after (youtube videos, medium articles,etc)

Also, please include the instructions necessary to...Run your example.

* i think just clone down this repo and run npm install && npm start
