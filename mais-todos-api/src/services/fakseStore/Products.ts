import { Ilogger } from "../../lib/logger";
import api from "./client";

type product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export interface IProductsService {
  getAllProducts(): Promise<product>;
  getSingleProduct(id: string): Promise<product>;
  getProductByCategory(category: string): Promise<product>;
  deleteProduct(id: string): Promise<void>;
  updateProduct(id: string, productData: product): Promise<product>;
}

// just created to have something to use
class Products implements IProductsService {
  private logger: Ilogger;

  constructor(logger: Ilogger) {
    this.logger = logger;
  }
  async getAllProducts(): Promise<product> {
    try {
      const { data } = await api.get("/products");
      return data;
    } catch (error) {
      this.logger.error("error when trying to get all product");
      throw new Error(error);
    }
  }
  async getSingleProduct(id: string): Promise<product> {
    try {
      const { data } = await api.get(`/products/${id}`);
      return data;
    } catch (error) {
      this.logger.error("error when trying to get single product");
      throw new Error(error);
    }
  }
  async getProductByCategory(category: string): Promise<product> {
    try {
      const { data } = await api.get(`/products/category/${category}`);
      return data;
    } catch (error) {
      this.logger.error("error when trying to get single product");
      throw new Error(error);
    }
  }
  async deleteProduct(id: string): Promise<void> {
    try {
      await api.delete(`/products/${id}`);
    } catch (error) {
      this.logger.error("error when trying to delete product");
      throw new Error(error);
    }
  }
  async updateProduct(id: string, productData: product): Promise<product> {
    try {
      const { data } = await api.put(`/products/${id}`, {
        data: productData,
      });
      return data;
    } catch (error) {
      this.logger.error("error when trying to update product");
      throw new Error(error);
    }
  }
}

export default Products;
