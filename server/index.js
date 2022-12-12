import express from "express";0
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";

import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

app.use(cors());
app.use(morgan('dev'));

app.listen(PORT);
console.log("Server up on port", PORT);