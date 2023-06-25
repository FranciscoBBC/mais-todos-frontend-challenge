import React from "react";
import ProductList from "../../components/ProductList";
import { useFetchAllProducts } from "../../queries/productQueries";
import { PageWrapper } from "./styles";

function Home() {
  const { data, isLoading, error } = useFetchAllProducts();

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <PageWrapper>
      <h1>Melhores Produtos</h1>
      <div>
        <ProductList productList={data} />
      </div>
    </PageWrapper>
  );
}

export default Home;
