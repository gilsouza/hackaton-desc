import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import { Button } from '../../components/Button';
import { Title, Container, Row } from '../Avaliar/styles';
import { useRate } from '../../hooks/Rate';

const Step2 = () => {
  const { setRateState, rateState } = useRate();
  const history = useHistory();
  const { pathname } = useLocation();
  const [happiness, setHappiness] = useState(rateState.happiness);
  const [employability, setEmployability] = useState(rateState.employability);
  const [salarySatisfaction, setSalarySatisfaction] = useState(rateState.salarySatisfaction);

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
      <ReactStars
        value={happiness}
        count={5}
        onChange={setHappiness}
        size={54}
        color1="#DDD"
        color2="#00C86F"
      />
      <Title>Avalie o quanto satisfeito você esta com seu salário</Title>
      <ReactStars
        value={salarySatisfaction}
        count={5}
        onChange={setSalarySatisfaction}
        size={54}
        color1="#DDD"
        color2="#00C86F"
      />
      <Title>Avalie a carreira em relação a empregabilidade</Title>
      <ReactStars
        value={employability}
        count={5}
        onChange={setEmployability}
        size={54}
        color1="#DDD"
        color2="#00C86F"
      />
      <Row>
        <Button
          text="Voltar passo"
          prefixIcon={<ArrowLeft />}
          style={{ marginRight: 8 }}
          onClick={() => history.push(pathname.replace('2', '1'))}
        />
        <Button
          disabled={!happiness || !salarySatisfaction || !employability}
          text="Proximo passo"
          sufixIcon={<ArrowRight />}
          onClick={() => history.push(pathname.replace('2', '3'))}
        />
      </Row>
    </Container>
  );
};

export { Step2 };
