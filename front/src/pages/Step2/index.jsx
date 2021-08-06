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
  const [happiness, setHappiness] = useState(null);
  const [employability, setEmployability] = useState(null);
  const [salarySatisfaction, setSalarySatisfaction] = useState(null);

  const { setRateState } = useRate();
  useEffect(() => {
    setRateState((previosRateState) => ({
      ...previosRateState,
      happiness,
      employability,
      salarySatisfaction,
    }));
  }, [happiness, salarySatisfaction, employability]);
  console.log(happiness, salarySatisfaction, employability);
  return (
    <Container>
      <Title>Avalie a carreira de acordo com sua qualidade de vida</Title>
      <ReactStars value={happiness} count={5} onChange={setHappiness} size={54} />
      <Title>Avalie o quanto satisfeito você esta com seu salário</Title>
      <ReactStars value={salarySatisfaction} count={5} onChange={setSalarySatisfaction} size={54} />
      <Title>Avalie a carreira em relação a empregabilidade</Title>
      <ReactStars value={employability} count={5} onChange={setEmployability} size={54} />
      <Button
        disabled={!happiness || !salarySatisfaction || !employability}
        text="Proximo passo"
        sufixIcon={<ArrowRight />}
        onClick={() => history.push(pathname.replace('2', '3'))}
      />
    </Container>
  );
};

export { Step2 };
