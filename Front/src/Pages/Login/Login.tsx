import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "../../Components/Toast/Toast";
import { goToHome, goToRegister } from "../../Router/coordinator";
import * as S from "./styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmitLogin = (e: any) => {
    e.preventDefault();
    loginApi({ email, password });
  };

  const loginApi = async (body: object) => {
    await axios
      .post("http://localhost:3003/user/login", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token as string);
        goToHome(navigate);
      })
      .catch(() => {
        setErrorMsg("Email ou senha não cadastrados");
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
          <S.CardTitle>Entrar</S.CardTitle>
          <S.Form onSubmit={onSubmitLogin}>
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
            <S.ButtonStyled type="submit">Entrar</S.ButtonStyled>
          </S.Form>
          <S.Footer>
            Não possui cadastro?{" "}
            <S.ButtonRegistration onClick={() => goToRegister(navigate)}>
              Clique aqui
            </S.ButtonRegistration>
          </S.Footer>
        </S.Card>
      </S.Content>
    </S.Main>
  );
};

export default Login;
