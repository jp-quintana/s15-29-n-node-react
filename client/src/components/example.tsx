import { Button } from './ui/button';

interface ExampleProps {
  name: string; // propiedad obligatoria
  lastName?: string; // propiedad opcional indicado por el "?"
}

const Example = ({ name }: ExampleProps) => {
  return <Button>{name}</Button>;
};

export default Example;
