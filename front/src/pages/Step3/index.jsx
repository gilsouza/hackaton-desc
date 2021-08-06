import { Check } from '@material-ui/icons';
import { useState } from 'react';
import { Container, Title } from '../Avaliar/styles';
import { Button } from '../../components/Button';

const Step3 = () => {
  const [depoimento, setDepoimento] = useState();
  const [submited, setSubimited] = useState(false);
  console.log(submited);
  return (
    <Container>
      <Title>Avalie a carreira de acordo com sua qualidade de vida</Title>
      <textarea onChange={(event) => setDepoimento(event.target.value)} value={depoimento} />
      <Button
        text="Enviar avaliação"
        sufixIcon={<Check />}
        onClick={() => setSubimited(true)}
      />
    </Container>
  );
};

export { Step3 };
