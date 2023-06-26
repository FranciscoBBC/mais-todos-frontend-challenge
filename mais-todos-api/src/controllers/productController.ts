import { Request, Response } from "express";
import { IProductsService } from "../services/fakseStore/Products";
import { IuserProductsRepository } from "../repositories/ProductsRepository";

class ProductController {
  // just created to have something to use
  private productService: IProductsService;
  private purchaseRepo: IuserProductsRepository;

  constructor(
    purchaseRepo: IuserProductsRepository,
    productService: IProductsService
  ) {
    this.productService = productService;
    this.purchaseRepo = purchaseRepo;
  }

  async getAllProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productService.getAllProducts();
      return res.send(products).status(200);
    } catch (error) {
      return res.status(400);
    }
  }

  async getSingleProducts(req: Request, res: Response): Promise<Response> {
    try {
      const product = await this.productService.getSingleProduct(req.params.id);
      return res.send(product).status(200);
    } catch (error) {
      return res.status(400);
    }
  }

  async getProductByCategory(req: Request, res: Response): Promise<Response> {
    try {
      const product = await this.productService.getProductByCategory(
        req.params.category
      );
      return res.send(product).status(200);
    } catch (error) {
      return res.status(400);
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      await this.productService.deleteProduct(req.params.id);
      return res.status(200);
    } catch (error) {
      return res.status(400);
    }
  }

  async editProduct(req: Request, res: Response): Promise<Response> {
    try {
      const product = await this.productService.updateProduct(
        req.params.id,
        req.body.data
      );
      return res.send(product).status(200);
    } catch (error) {
      return res.status(400);
    }
  }

  async buyProduct(req: Request, res: Response): Promise<Response> {
    try {
      const { paymentInfos, cart } = req.body;

      cart.forEach(async (product) => {
        // fake user ID
        const purchase = await this.purchaseRepo.buyProduct(
          "123",
          paymentInfos,
          product
        );

        console.log(purchase);
      });
      return res.send("ok").status(200);
    } catch (error) {
      return res.status(400);
    }
  }
}

export default ProductController;
