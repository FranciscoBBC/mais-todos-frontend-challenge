/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button/Button";
import { ErrorMessage, Form, PageWrapper, Input, Textarea } from "./styles";
import { useEditProduct } from "../../queries/productQueries";

const formSchema = z.object({
  title: z.string().min(1, "Preencha um nome valido"),
  price: z.number().min(1, "Preencha um preço valido"),
  description: z.string().min(1, "preencha uma descrição para o produto"),
});

const EditProduct = () => {
  const { state } = useLocation();
  const { id, title, price, description } = state;
  const { mutate, isSuccess, isError, isLoading } = useEditProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      price,
      description,
    },
  });

  const handleSubmitForm = useCallback(
    (data) => {
      mutate({ id, data });
    },
    [id, mutate]
  );

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <label htmlFor="title">Titulo do produto</label>
          <Input {...register("title")} type="text" id="title" />
          {errors?.title?.message && (
            <ErrorMessage>{errors?.title?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <Input
            {...register("price", {
              setValueAs: (val) => parseFloat(val),
            })}
            type="text"
            id="price"
          />
          {errors?.price?.message && (
            <ErrorMessage>{errors?.price?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <label htmlFor="description">Descrição do produto</label>
          <Textarea
            {...register("description")}
            rows="10"
            cols="50"
            id="description"
          />
          {errors?.description?.message && (
            <ErrorMessage>{errors?.description?.message}</ErrorMessage>
          )}
        </div>
        <Button type="submit">EDITAR</Button>
      </Form>
      {isLoading && <span>loading</span>}
      {isError && <span>Algo deu errado</span>}
      {isSuccess && <span>Produto editado com sucesso</span>}
    </PageWrapper>
  );
};

export default EditProduct;
