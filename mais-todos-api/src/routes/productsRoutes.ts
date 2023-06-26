import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router
  .get("/products", (req, res) =>
    controllers.productController.getAllProducts(req, res)
  )
  .get("/products/:id", (req, res) =>
    controllers.productController.getSingleProducts(req, res)
  )
  .get("/products/category/:category", (req, res) =>
    controllers.productController.getProductByCategory(req, res)
  )
  .post("/products/buy", (req, res) =>
    controllers.productController.buyProduct(req, res)
  )
  .delete("/products/:id", (req, res) =>
    controllers.productController.deleteProduct(req, res)
  )
  .put("/products/:id", (req, res) =>
    controllers.productController.editProduct(req, res)
  );

export default router;
