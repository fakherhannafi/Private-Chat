# Chat Test

> Live chatroom built with Socket.io, React, MongoDB, Express and Node.js.
I didn't start this project from scratch (3 hours could not do all this :p)

# Features required :

- Inscription
- Login
- List all subscribers
- Once we select a subscriber, a component is displayed to show private conversation
- All messages are sent in realtime (thanks to protocol socket) without refreshing the page


## Required global packages

Since that some of my packages are installed **globally**, so you might need to install them yourself.

```shell
$ npm install -g nodemon (to restart automatically the node server)
$ sudo yum install -y mongodb-org # minimum version required : v3.6.2
```

## start mongodb service server

```Shell
$ mongod 
```
you can use mongoDB compass GUI to see our database

## Launch node server

``` Open another Shell under the project directory
$ npm install (to install all local package localised in package.json)
$ npm run build (use webpack to minimize and collect all files in few js modules )
$ npm run start (start nodemon)
``` 
 Open http://localhost:3000/





## Dependencies

* Front-end Framework: **React, React-dom**
* Front-end Ajax communication: **axios, socket.io-client**
* Front-end Web RWD Design: **Material-ui, livechat-ui**
* Back-end: **Node.js, Express.js, Socket.io**
* Database: **Mongoose, MongoDB**
* Bundle: **Webpack, Babel**

## License

MIT License