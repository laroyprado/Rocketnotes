import { Container, Links, Content } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            molestias saepe illo itaque tempora et cupiditate delectus incidunt
            aspernatur, rerum repellat consequatur officia, necessitatibus quas,
            voluptas iure libero sint voluptatem.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://github.com/laroyprado">
                  https://github.com/laroyprado
                </a>
              </li>
              <li>
                <a href="https://github.com/laroyprado">
                  https://github.com/laroyprado
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
