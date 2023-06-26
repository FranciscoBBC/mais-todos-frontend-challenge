import UserProductsRepo from "../database/mongo/userProducts";
import Logger from "../lib/logger";
import Products from "../services/fakseStore/Products";
import ProductController from "./productController";

const productController = () => {
  const logger = new Logger();

  // just created to have something to use
  const productService = new Products(logger);
  const userProductsRepo = new UserProductsRepo(logger);

  const controller = new ProductController(userProductsRepo, productService);

  return controller;
};

const controllers = {
  productController: productController(),
};

export default controllers;
