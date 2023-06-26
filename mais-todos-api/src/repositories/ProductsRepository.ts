import { IuserProducts, paymentInfos, product } from "../models/userProducts";

export interface IuserProductsRepository {
  buyProduct(
    userID: string,
    product: product,
    paymentInfos: paymentInfos
  ): Promise<IuserProducts>;
}
