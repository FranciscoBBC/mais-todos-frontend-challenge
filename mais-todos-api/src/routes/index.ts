import express from "express";
import productsRoutes from "./productsRoutes";

const routes = (app) => {
  app.route("/healthcheck").get((req, res) => {
    res.status(200).send("ok");
  });

  app.use(express.json(), productsRoutes);
};

export default routes;
