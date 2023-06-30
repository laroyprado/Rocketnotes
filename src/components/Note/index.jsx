import { Container } from "../Note/styles";
import { Tag } from "../Tag";
export const Note = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {console.log(data.tags)}
          {data.tags.map((tag) => {
            return <Tag key={tag.id} title={tag.name} />;
          })}
        </footer>
      )}
    </Container>
  );
};
