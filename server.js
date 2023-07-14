const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = 3001;
server.listen(port, () => console.log(`JSON server is running on port ${port}`))