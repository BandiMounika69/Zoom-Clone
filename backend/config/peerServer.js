// server/config/peerServer.js
const { ExpressPeerServer } = require('peer');

const peerServer = (app) => {
  const peerServer = ExpressPeerServer(app, {
    debug: true,
    path: '/myapp',
  });

  app.use('/peerjs', peerServer);
};

module.exports = peerServer;
