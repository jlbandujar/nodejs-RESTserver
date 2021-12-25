require('dotenv').config();
const Server = require('./modelo/server');
const server=new Server();
server.listen();

