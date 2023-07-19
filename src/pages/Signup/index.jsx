import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState } from "react";
import { api } from "../../services/api";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return alert("Por favor, preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  };

  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie Sua Conta</h2>
        <Input
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/ ">Voltar para o login</Link>
      </Form>
    </Container>
  );
};
