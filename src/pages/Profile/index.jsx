import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export const Profile = () => {
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setpasswordOld] = useState();
  const [passwordNew, setpasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" onChange={handleChangeAvatar} type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha Atual"
          onChange={(e) => setpasswordOld(e.target.value)}
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova Senha"
          onChange={(e) => setpasswordNew(e.target.value)}
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
};
