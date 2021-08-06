import { ArrowRight } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container, Row, Title,
} from '../Avaliar/styles';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';
import { useRate } from '../../hooks/Rate';

const Step1 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { currentCareer } = useCareers();
  const { setRateState, rateState } = useRate();
  const [isEmployed, setIsEmployed] = useState(rateState.isEmployed);
  // const [searchText, setSearchText] = useState('');
  // const [selectedCareer, setSelectedCareer] = useState(rateState.selectedCareer);
  const [salaryRange, setSalaryRange] = useState(null);

  useEffect(() => {
    setRateState((previosRateState) => ({
      ...previosRateState,
      careerId: currentCareer?.id,
      selectedCareer: currentCareer,
      salaryRange,
      isEmployed,
    }));
  }, [salaryRange, currentCareer, isEmployed]);

  // const searchCareers = async () => {
  //   const carrers = await getCareersByFragment(searchText, false);
  //   if (searchText) {
  //     return carrers.map((c) => ({ ...c, label: c.name }));
  //   }
  //   return [];
  // };
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
            {/* <Title>Qual sua área de atuação?</Title>
            <AsyncSelectStyled
              cacheOptions
              loadOptions={searchCareers}
              placeholder="carreira"
              noOptionsMessage={() => 'Não encontramos nenhuma carreira com esse nome :('}
              onInputChange={setSearchText}
              value={selectedCareer}
              onChange={(option) => setSelectedCareer(option)}
            /> */}
            <Title>Qual a sua faixa de salário atual?</Title>
            <Row>
              <tbody style={{ display: 'flex', flexDirection: 'column' }}>
                <tr style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <td style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input
                      type="radio"
                      name="radio1"
                      value={0}
                      checked={salaryRange === 0}
                      onChange={() => setSalaryRange(0)}
                    />
                    0 a 2000

                  </td>
                  <td style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input
                      type="radio"
                      name="radio2"
                      value={1}
                      checked={salaryRange === 1}
                      onChange={() => setSalaryRange(1)}
                    />
                    2001 a 5000

                  </td>
                  <td style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <input
                      type="radio"
                      name="radio3"
                      value={2}
                      checked={salaryRange === 2}
                      onChange={() => setSalaryRange(2)}
                    />
                    Mais de 5000

                  </td>
                </tr>
              </tbody>
            </Row>
            <Button
              text="Proximo passo"
              disabled={salaryRange === null}
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
