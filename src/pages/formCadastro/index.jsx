import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  Title,
  Wrapper,
  TitleForm,
  SubTitleForm,
  Termo,
  TitleLogin,
} from "./styles";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { Button } from "../../components/Button";

const schema = yup.object({
  nome: yup.string().required("Campo obrigatorio"),
  email: yup.string().email("Email não é valido").required("Campo Obrigatorio"),
  password: yup
    .string()
    .min(3, "No minimo 3 caracters")
    .required("Campo Obrigatorio"),
});

const FormCadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleForm>Comece agora grátis</TitleForm>
            <SubTitleForm>Crie sua conta e make the change._</SubTitleForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                errorMessage={errors?.nome?.message}
                control={control}
                placeholder="Nome Completo"
                type="text"
                leftIcon={<MdAccountCircle />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>

            <Termo>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </Termo>
            <TitleLogin>
              Já tenho conta.
              <a href="/login"> Fazer login</a>
            </TitleLogin>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { FormCadastro };
