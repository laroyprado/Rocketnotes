import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button";

export const New = () => {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://facebook.com" />
            <NoteItem isNew placeholder="Novo Item" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
};
