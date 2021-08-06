import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  AsyncSelectStyled, Container, Row, Title,
} from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';
import { useRate } from '../../hooks/Rate';

const Step1 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { getCareersByFragment } = useCareers();
  const { setRateState } = useRate();
  const [isEmployed, setIsEmployed] = useState();
  const [searchText, setSearchText] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  const [salaryRange, setSalaryRange] = useState(null);

  useEffect(() => {
    setRateState((previosRateState) => ({
      ...previosRateState,
      careerId: selectedCareer,
      salaryRange,
    }));
  }, [salaryRange, selectedCareer]);

  const searchCareers = async () => {
    const carrers = await getCareersByFragment(searchText, false);
    if (searchText) {
      return carrers.map((c) => ({ ...c, label: c.name }));
    }
    return [];
  };
  return (
    <Container>
      <Title>Você está empregado(a) no momento?</Title>
      <Row>
        <Button text="Sim" onClick={() => setIsEmployed(true)} />
        <Button style={{ marginLeft: 8 }} text="Não" onClick={() => history.goBack()} />
      </Row>
      {
          isEmployed && (
          <>
            <Title>Qual sua área de atuação?</Title>
            <AsyncSelectStyled
              cacheOptions
              loadOptions={searchCareers}
              defaultOptions
              placeholder="Desenvolvedor..."
              onInputChange={setSearchText}
              onChange={({ id }) => setSelectedCareer(id)}
            />
            <Title>Qual a sua faixa de salário atual?</Title>
            <Row>
              <Button selected={salaryRange === 0} text="0 a 2000" onClick={() => setSalaryRange(0)} />
              <Button selected={salaryRange === 1} style={{ margin: '0 8px' }} text="2001 a 5000" onClick={() => setSalaryRange(1)} />
              <Button selected={salaryRange === 2} text="Mais de 5000" onClick={() => setSalaryRange(2)} />
            </Row>
            <Button
              text="Proximo passo"
              disabled={salaryRange === null || !selectedCareer}
              sufixIcon={<ArrowRight />}
              onClick={() => history.push(pathname.replace('1', '2'))}
            />
          </>
          )
        }
    </Container>
  );
};

export { Step1 };
