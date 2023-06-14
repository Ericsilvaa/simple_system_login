import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Singin = () => {
  const { signin  } = useAuth()
  // const { signin, user  } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user_token'))
    if(userToken) navigate('/home')

    // usando Context
    // if(user) navigate('home')
  }, [])

  function handleLogin() {
    // verificação login
    if(!email || !senha) {
      setError('Preencha todos os Campos');
      return
    }

    const res = signin(email,senha)

    // se retornar a frase do return de error
    if(res){
      setError(res)
      return;
    }

    navigate('/home')

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
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={({ target }) => [setSenha(target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text='Entrar' onClick={handleLogin} />
        <C.LabelSignup>
          Não tem conta?
          <C.Strong>
            <Link to='/signup'>&nbsp; Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Singin;
