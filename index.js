require("dotenv").config();

const env = process.env.NODE_ENV;
const server = require("./server");
const { server: config } = require("./lib/config")[env];

server.listen(config.port, () => {
	console.log(`Server listening on port: ${config.port}.`);
});
