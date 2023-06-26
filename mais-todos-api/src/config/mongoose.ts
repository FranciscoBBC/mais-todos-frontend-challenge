import mongoose from "mongoose";
import { Ilogger } from "../lib/logger";

const createMongooseClient = (logger: Ilogger) => {
  const { DB_HOST, DB_PASS, DB_USER, DB_PORT, DB_NAME } = process.env;

  mongoose.connect(
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
    {
      socketTimeoutMS: parseInt(process.env.DB_TIMEOUT),
    }
  );

  const db = mongoose.connection;

  db.on("error", logger.error.bind(console, "mongo connection failed"));
  db.once("open", () => logger.log("mongo connection established"));
};

export default createMongooseClient;
