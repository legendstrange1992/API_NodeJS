const app = require('./app');
// create server
const server = require('http').createServer(app);

// server listen PORT
server.listen(process.env.PORT || 3000);









