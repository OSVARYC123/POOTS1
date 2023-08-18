
import bodyParser from "body-parser";
import express from "express";
const cors = require('cors')
import { config } from "./config";
import { routes } from "./Producto/infrastructure/RouteUser";
import "dotenv/config";

  const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/Users", routes);


  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - corriendo puerto ${port}`);
  });


