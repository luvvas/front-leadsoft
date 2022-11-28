import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { AxiosConfig } from "@/configs/axiosConfig";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { LoginContainer } from "./style";
import LeadSoftLogo from "@/assets/leadsoft_logotipo.svg";

import { useAuthContext } from "@/contexts/Auth";

interface FormData {
  username: string;
  password: string;
}

const isValidEmail = (email: string) =>
  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  const submitHandler = handleSubmit(async ({ username, password }) => {
    try {
      const response = await AxiosConfig.post("/Auth/Login", {
        username,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        setAuth(true);
        navigate("/home");
      }
    } catch (error: any) {
      if (error.response.data) toast.error("Usuário e/ou senha inválidos");
    }
  });

  const handleUserValidation = (username: string) =>
    isValidEmail(username) || "Usuário deve ser um email válido";

  return (
    <LoginContainer>
      <img src={LeadSoftLogo} alt="Logo LeadSoft" />
      <form action="login" onSubmit={submitHandler}>
        <Input
          className="input"
          placeholder="Usuário"
          type="text"
          {...register("username", {
            required: "Campo obrigatório",
            validate: handleUserValidation,
          })}
          error={errors.username?.message}
        />
        <Input
          className="input"
          placeholder="Senha"
          type="password"
          {...register("password", {
            required: { value: true, message: "Campo obrigatório" },
          })}
          error={errors.password?.message}
        />
        <Button className="submit" type="submit" label="Login" />
      </form>
    </LoginContainer>
  );
};

// Container
//  img/
//  form
//    Input/
//    Input/
//    Button/
//  /form
// /Container
