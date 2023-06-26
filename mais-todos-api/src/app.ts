import express from "express";
import routes from "./routes/index.ts";
import cors from "cors";
import createMongooseClient from "./config/mongoose.ts";
import Logger from "./lib/logger.ts";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());

routes(app);

const port = process.env.SERVER_PORT || 3000;

const startup = async () => {
  const logger = new Logger();

  createMongooseClient(logger);

  app.listen(port, () => {
    console.log(`server is running in http://localhost:${port}`);
  });
};

startup();

export default app;
