import { Header } from "../../components/Header";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export const New = () => {
  const [title, setTitle] = useState("");

  const [link, setlink] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setlink((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setlink((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }
    if (newLink) {
      alert(
        "Você deixou uma link no campo adicionar, clique em adicionar ou deixe em branco"
      );
    }
    if (newTag) {
      alert(
        "Você deixou uma tag no campo adicionar, clique em adicionar ou deixe em branco"
      );
    }

    await api.post("notes", {
      title,
      description,
      tags,
      link,
    });

    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={handleBack} />
          </header>
          <Input
            placeholder="Título"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Textarea
            placeholder="Observações"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <Section title="link úteis">
            {link.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo Item"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
};
