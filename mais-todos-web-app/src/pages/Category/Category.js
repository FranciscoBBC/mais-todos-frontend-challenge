import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { PageWrapper } from "./styles";
import { useFetchProductsByCategory } from "../../queries/productQueries";

const Category = () => {
  const { name } = useParams();

  const { data, isLoading, error } = useFetchProductsByCategory(name);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <PageWrapper>
      <h1>{name}</h1>
      <div>
        <ProductList productList={data} />
      </div>
    </PageWrapper>
  );
};

export default Category;
