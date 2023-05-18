import express from "express";
import { options } from "./config/config.js";
import { __dirname } from "./utils.js";

const app = express();
const port = options.server.port;

//middlewares
app.use(express.json());

app.listen(port, () => console.log(`server listening on port ${port}`));
