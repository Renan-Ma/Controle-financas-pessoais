import React, { useState } from "react";
import * as S from "./styled";
import TextField from "@mui/material/TextField";
import axios from "axios";
// import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToHome, goToRegister } from "../../Router/coordinator";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const onSubmitRegister = (e: any) => {
    e.preventDefault();
    const userRegister = {
      name,
      email,
      password,
    };
    cadastroApi(userRegister);
  };

  const cadastroApi = async (body: object) => {
    await axios
      .post("http://localhost:3003/user/singup", body)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        goToHome(navigate);
      })
      .catch((err) => {
        console.log(err.response)
        // alert(err.response.data.message);
        alert("Houve um erro, tente novamente mais tarde");
      });
  };

  return (
    <S.Main>
      {/* <S.Title>Sistema Financeiro</S.Title> */}
      <S.Form onSubmit={onSubmitRegister}>
        <TextField
          id="outlined-name-input"
          label={"Nome"}
          type={"nome"}
          autoComplete="current-nome"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
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

        <S.ButtonStyled type="submit"> Cadastrar</S.ButtonStyled>
      </S.Form>
    </S.Main>
  );
};

export default Register;
