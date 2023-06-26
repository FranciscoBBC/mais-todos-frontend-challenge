import { useMutation, useQuery } from "react-query";
import api from "../services/api";

async function getProducts(ctx) {
  const [, productID, category] = ctx.queryKey;
  if (productID) {
    const { data } = await api.get(`/products/${productID}`);
    return data;
  }
  if (category) {
    const { data } = await api.get(`/products/category/${category}`);
    return data;
  }

  const { data } = await api.get("/products");
  return data;
}

export function useFetchSingleProduct(productID) {
  return useQuery(["singleProduct", productID], getProducts);
}

export function useFetchAllProducts() {
  return useQuery(["allProducts"], getProducts);
}

export function useFetchProductsByCategory(category) {
  return useQuery(["productsByCategory", null, category], getProducts);
}

async function editProducts(productData) {
  const { id, data: infos } = productData;
  const { data } = await api.put(`/products/${id}`, { infos });
  return data;
}

export function useEditProduct() {
  return useMutation(editProducts);
}

async function deleteProduct(productData) {
  const { id } = productData;
  const { data } = await api.delete(`/products/${id}`);
  return data;
}

export function useDeleteProduct() {
  return useMutation(deleteProduct);
}
