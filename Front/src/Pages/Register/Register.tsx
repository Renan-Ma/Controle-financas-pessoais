import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../../Components/Toast/Toast";
import { goToHome, goToLogin } from "../../Router/coordinator";
import * as S from "./styled";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmitRegister = (e: any) => {
    e.preventDefault();
    cadastroApi({ name, email, password });
  };

  const cadastroApi = async (body: object) => {
    await axios
      .post("http://localhost:3003/user/singup", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToHome(navigate);
      })
      .catch(() => {
        setErrorMsg("Houve um erro, tente novamente mais tarde");
      });
  };

  return (
    <S.Main>
      {errorMsg && (
        <Toast message={errorMsg} type="error" onClose={() => setErrorMsg(null)} />
      )}
      <S.Header>
        <S.HeaderTitle>Controle Financeiro</S.HeaderTitle>
      </S.Header>
      <S.Content>
        <S.Card>
          <S.CardTitle>Criar conta</S.CardTitle>
          <S.Form onSubmit={onSubmitRegister}>
            <TextField
              label="Nome"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="E-mail"
              type="email"
              variant="outlined"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="Mínimo 5 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ minLength: 5 }}
              required
              fullWidth
            />
            <S.ButtonStyled type="submit">Cadastrar</S.ButtonStyled>
          </S.Form>
          <S.Footer>
            Já possui cadastro?{" "}
            <S.ButtonBack onClick={() => goToLogin(navigate)}>
              Fazer login
            </S.ButtonBack>
          </S.Footer>
        </S.Card>
      </S.Content>
    </S.Main>
  );
};

export default Register;
