import React, { useState } from "react";
import * as S from "./styled";
import TextField from "@mui/material/TextField";
import axios from "axios";
// import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToHome, goToRegister } from "../../Router/coordinator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    loginApi(userLogin);
  };

  const loginApi = async (body: object) => {
    await axios
      .post("http://localhost:3003/user/login", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToHome(navigate);
      })
      .catch((err) => {
        // alert(err.response.data.message);
        alert("Email ou senha não cadastrados");
      });
  };

  return (
    <S.Main>
      {/* <S.Title>Sistema Financeiro</S.Title> */}
      <S.Form onSubmit={onSubmitLogin}>
        <TextField
          id="outlined-basic"
          label="E-mail"
          type={"email"}
          variant="outlined"
          placeholder="email@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          id="outlined-password-input"
          label={"Senha"}
          type={"password"}
          autoComplete="current-password"
          placeholder="Mínimo 6 caracteres"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          inputProps={{ minLength: 6, title: "Senha mínima 6 caracteres" }}
          required
        />
        <S.ButtonStyled type="submit"> Entrar</S.ButtonStyled>
      </S.Form>
      <p>
        Não possui cadastro?
        <S.ButtonRegistration onClick={() => goToRegister(navigate)}>
          Clique aqui
        </S.ButtonRegistration>
      </p>
    </S.Main>
  );
};

export default Login;
