import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Title } from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';
import { useRate } from '../../hooks/Rate';

const Step1 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { currentCareer } = useCareers();
  const { setRateState, rateState } = useRate();
  const [isEmployed, setIsEmployed] = useState(rateState.isEmployed);
  const [timeEmployed, setTimeEmployed] = useState(rateState.timeEmployed);
  const [salaryRange, setSalaryRange] = useState(rateState.salaryRange);

  useEffect(() => {
    setRateState((previosRateState) => ({
      ...previosRateState,
      careerId: currentCareer?.id,
      salaryRange,
      isEmployed,
      timeEmployed,
    }));
  }, [salaryRange, isEmployed, timeEmployed]);

  return (
    <Container>
      {isEmployed !== true ? (
        <>
          <Title>Você está empregado nessa carreira atualmente?</Title>
          <Row>
            <Button text="Sim" onClick={() => setIsEmployed(true)} />
            <Button style={{ marginLeft: 8 }} text="Não" onClick={() => history.goBack()} />
          </Row>
        </>
      ) : (
        <>
          <Title>Qual a sua faixa de salário atual?</Title>
          <Row>
            <tbody style={{ display: 'flex', flexDirection: 'column' }}>
              <tr style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio1"
                    value={0}
                    checked={salaryRange === 0}
                    onChange={() => setSalaryRange(0)}
                  />
                  Até R$ 2.000,00

                </td>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio2"
                    value={1}
                    checked={salaryRange === 1}
                    onChange={() => setSalaryRange(1)}
                  />
                  De R$ 2001 a R$ 5.000,00

                </td>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio3"
                    value={2}
                    checked={salaryRange === 2}
                    onChange={() => setSalaryRange(2)}
                  />
                  Mais de R$ 5.000,00

                </td>
              </tr>
            </tbody>
          </Row>
          <Title>Há quanto tempo você atua no mercado de trabalho?</Title>
          <Row>
            <tbody style={{ display: 'flex', flexDirection: 'column' }}>
              <tr style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio-employed1"
                    value={0}
                    checked={timeEmployed === 0}
                    onChange={() => setTimeEmployed(0)}
                  />
                  Menos de 1 ano

                </td>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio-employed2"
                    value={1}
                    checked={timeEmployed === 1}
                    onChange={() => setTimeEmployed(1)}
                  />
                  De 1 a 3 anos

                </td>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio-employed3"
                    value={2}
                    checked={timeEmployed === 2}
                    onChange={() => setTimeEmployed(2)}
                  />
                  De 3 a 5 anos

                </td>
                <td style={{ display: 'flex', flexDirection: 'row' }}>
                  <input
                    type="radio"
                    name="radio-employed4"
                    value={2}
                    checked={timeEmployed === 3}
                    onChange={() => setTimeEmployed(3)}
                  />
                  Mais de 5 anos

                </td>
              </tr>
            </tbody>
          </Row>
          <Button
            text="Proximo passo"
            disabled={salaryRange === undefined || timeEmployed === undefined}
            sufixIcon={<ArrowRight />}
            onClick={() => history.push(pathname.replace('1', '2'))}
          />
        </>
      )}
    </Container>
  );
};

export { Step1 };
