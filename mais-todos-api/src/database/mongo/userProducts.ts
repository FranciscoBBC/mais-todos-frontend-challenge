import { Ilogger } from "../../lib/logger";
import { IuserProductsRepository } from "../../repositories/ProductsRepository";
import userProducts, {
  IuserProducts,
  paymentInfos,
  product,
} from "../../models/userProducts";

class userProductsRepo implements IuserProductsRepository {
  private logger: Ilogger;

  constructor(logger: Ilogger) {
    this.logger = logger;
  }
  async buyProduct(
    userID: string,
    product: product,
    paymentInfos: paymentInfos
  ): Promise<IuserProducts> {
    try {
      const purchase = await userProducts.create({
        userID: userID,
        paymentInfos: paymentInfos,
        product: product,
      });
      return purchase;
    } catch (e) {
      this.logger.error(e.message);
      throw new Error(e);
    }
  }
}

export default userProductsRepo;
