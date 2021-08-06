import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ReactStars from 'react-stars';
import { Button } from '../../components/Button';
import { Title, Container } from '../Avaliar/styles';

const Step2 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [quality, setQuality] = useState(3);
  console.log('quality', quality);

  return (
    <Container>
      <Title>Avalie a carreira de acordo com sua qualidade de vida</Title>
      <ReactStars count={5} ratingChanged={setQuality} size={54} />
      <Title>Avalie o quanto satisfeito você esta com seu salário</Title>
      <ReactStars count={5} ratingChanged={setQuality} size={54} />
      <Title>Avalie a carreira em relação a empregabilidade</Title>
      <ReactStars count={5} ratingChanged={setQuality} size={54} />
      <Button
        text="Proximo passo"
        sufixIcon={<ArrowRight />}
        onClick={() => history.push(pathname.replace('2', '3'))}
      />
    </Container>
  );
};

export { Step2 };
