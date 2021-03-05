require("dotenv").config();

const cors = require("cors");
const { version } = require("./../lib/config")[process.env.NODE_ENV];
const server = require("express")();
const router = require("./../routes");
const bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(`/api/v${version}/`, router);

module.exports = server;
