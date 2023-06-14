import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  function handleSignup() {
    // verificando se tem algo digitado
    if(!email || !emailConfirm || !senha){
      setError('Preencha todos os campos!')
      return
    } else if(email !== emailConfirm) {
      setError('Os e-mails não são iguais!')
      return
    }

    const res = signup(email, senha)

    if(res) {
      setError(res)
      return
    }

    // poderia ser card de confirmação (pop-ups)
    alert('Usuário cadastrado com sucesso');
    navigate('/')

  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={({ target }) => [setEmail(target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConfirm}
          onChange={({ target }) => [
            setEmailConfirm(target.value),
            setError(""),
          ]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={({ target }) => [setSenha(target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignup>
          Já tem conta?
          <C.Strong>
            <Link to="/">&nbsp; Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
