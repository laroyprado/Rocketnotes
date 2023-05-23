import { Container } from "./style";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Rodrigo Gonçalves</span>

      <Button title="Loginr"   />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}
