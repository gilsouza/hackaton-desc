import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  AsyncSelectStyled, Container, Row, Title,
} from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';

const Step1 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { getCareersByFragment } = useCareers();
  const [isEmployed, setIsEmployed] = useState();
  const [searchText, setSearchText] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  const [salarie, setSalarie] = useState(0);

  console.log(selectedCareer, salarie);
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
        <Button text="Não" onClick={() => history.goBack()} />
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
              <Button text="0 a 2000" onClick={() => setSalarie(0)} />
              <Button text="2001 a 5000" onClick={() => setSalarie(1)} />
              <Button text="Mais de 5000" onClick={() => setSalarie(2)} />
            </Row>
            <Button
              text="Proximo passo"
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
