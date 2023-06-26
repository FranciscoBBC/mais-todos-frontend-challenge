import mongoose from "mongoose";

export type paymentInfos = {
  fullName: string;
  cpf: string;
  cardNumber: string;
  safetyNumber: string;
  cardExpiration: string;
  installments: number;
};

export type product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export interface IuserProducts extends Document {
  userID: string;
  paymentInfos: paymentInfos;
  product: product;
}

const userProductsSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  paymentInfos: {
    type: {
      fullName: String,
      cpf: String,
      cardNumber: String,
      safetyNumber: String,
      cardExpiration: String,
      installments: Number,
    },
    required: true,
  },
  product: {
    type: {
      id: Number,
      title: String,
      price: Number,
      category: String,
      description: String,
      image: String,
    },
    required: true,
  },
});

const userProducts = mongoose.model<IuserProducts>(
  "UserProduct",
  userProductsSchema
);

export default userProducts;
