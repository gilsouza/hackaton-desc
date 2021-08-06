import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import { Button } from '../../components/Button';
import { Title, Container } from '../Avaliar/styles';
import { useRate } from '../../hooks/Rate';

const Step2 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [happiness, setHappiness] = useState(3);
  const [employability, setEmployability] = useState(3);
  const [salarySatisfaction, setSalarySatisfaction] = useState(3);

  const { setRateState } = useRate();
  useEffect(() => {
    setRateState((previosRateState) => ({
      ...previosRateState,
      happiness,
      employability,
      salarySatisfaction,
    }));
  }, [happiness, salarySatisfaction, employability]);
  return (
    <Container>
      <Title>Avalie a carreira de acordo com sua qualidade de vida</Title>
      <ReactStars count={5} ratingChanged={setHappiness} size={54} />
      <Title>Avalie o quanto satisfeito você esta com seu salário</Title>
      <ReactStars count={5} ratingChanged={setSalarySatisfaction} size={54} />
      <Title>Avalie a carreira em relação a empregabilidade</Title>
      <ReactStars count={5} ratingChanged={setEmployability} size={54} />
      <Button
        text="Proximo passo"
        sufixIcon={<ArrowRight />}
        onClick={() => history.push(pathname.replace('2', '3'))}
      />
    </Container>
  );
};

export { Step2 };
