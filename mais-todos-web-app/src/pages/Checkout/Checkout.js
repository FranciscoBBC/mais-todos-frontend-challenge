import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import {
  Form,
  Input,
  Select,
  SubTitle,
  Title,
  PageWrapper,
  ErrorMessage,
} from "./styles";
import useCartStore from "../../store/useCartStore";
import priceFormatter from "../../utils/priceFormater";
import { useBuyProduct } from "../../queries/productQueries";

const formSchema = z.object({
  paymentInfos: z.object({
    fullName: z.string().min(1, "Preencha o seu nome completo"),
    cpf: z.string().min(1, "CPF é obrigatório").max(11, "CPF inválido"),
    cardNumber: z
      .string()
      .min(1, "Número  do cartão é obrigatório")
      .max(16, "numero do cartão inválido"),
    safetyNumber: z
      .string()
      .min(1, "Código de segurança é obrigatório")
      .max(3, "Código de segurança inválido"),
    cardExpiration: z
      .string()
      .min(1, "data de validade do cartão é obrigatório")
      .max(6, "data de validade do cartão inválido"),
    installments: z.string(),
  }),
});

const Checkout = () => {
  const cartStorage = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const { mutate, isSuccess, isError, isLoading } = useBuyProduct();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      cardNumber: "",
      safetyNumber: "",
      cardExpiration: "",
      installments: "0",
    },
  });

  const handleSubmitForm = useCallback(
    (data) => {
      mutate({ ...data, cart: cartStorage });
    },
    [cartStorage, mutate]
  );

  const totalPrice = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return priceFormatter(total);
  };

  useEffect(() => {
    if (isSuccess) {
      clearCart();
      navigate("/");
    }
  }, [clearCart, isSuccess, navigate]);

  return (
    <PageWrapper>
      <Title>Resumo da compra</Title>
      <p>Valor total {totalPrice(cartStorage)}</p>
      <SubTitle>Dados do pagamento</SubTitle>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <Input
            {...register("paymentInfos.fullName")}
            type="text"
            placeholder="Nome completo"
          />
          {errors?.paymentInfos?.fullName?.message && (
            <ErrorMessage>
              {errors?.paymentInfos?.fullName?.message}
            </ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("paymentInfos.cpf")}
            type="text"
            placeholder="CPF"
          />
          {errors?.paymentInfos?.cpf?.message && (
            <ErrorMessage>{errors?.paymentInfos?.cpf?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("paymentInfos.cardNumber")}
            type="text"
            placeholder="Numero do cartão"
          />
          {errors?.paymentInfos?.cardNumber?.message && (
            <ErrorMessage>
              {errors?.paymentInfos?.cardNumber?.message}
            </ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("paymentInfos.safetyNumber")}
            type="text"
            placeholder="Código de segurança"
          />
          {errors?.paymentInfos?.safetyNumber?.message && (
            <ErrorMessage>
              {errors?.paymentInfos?.safetyNumber?.message}
            </ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("paymentInfos.cardExpiration")}
            type="text"
            placeholder="Validade"
          />
          {errors?.paymentInfos?.cardExpiration?.message && (
            <ErrorMessage>
              {errors?.paymentInfos?.cardExpiration?.message}
            </ErrorMessage>
          )}
        </div>
        <Select {...register("paymentInfos.installments")} name="installments">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Select>

        <Button type="submit">COMPRAR</Button>
      </Form>
      {isLoading && <span>loading</span>}
      {isError && <span>Algo deu errado</span>}
      {isSuccess && <span>Produto editado com sucesso</span>}
    </PageWrapper>
  );
};

export default Checkout;
