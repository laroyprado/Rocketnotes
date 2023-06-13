import { Container } from "./styles";

export const ButtonText = ({ title, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  );
};
