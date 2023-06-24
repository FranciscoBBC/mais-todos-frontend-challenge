import { useQuery } from "react-query";
import api from "../services/api";

async function getProducts(ctx) {
  const [, productID] = ctx.queryKey;
  if (!productID) {
    const { data } = await api.get("/products");
    return data;
  }
  const { data } = await api.get(`/products/${productID}`);
  return data;
}

export function useFetchSingleProduct(productID) {
  return useQuery(["singleProduct", productID], getProducts);
}

export function useFetchAllProducts() {
  return useQuery(["allProducts"], getProducts);
}
