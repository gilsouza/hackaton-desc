import { useHistory, useParams } from 'react-router-dom';
import { Add, Check, RateReview } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import {
  CarrerHeader, ContentContainer, PageBackground,
  PageContainer, ProfessionHeader, ProfessionText, Row,
} from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';
import { Tabs } from '../../components/Tabs';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';
import { Header } from '../../components/Header';

const tabs = [
  {
    name: 'Visão Geral',
    path: '',
  },
  {
    name: 'Duvidas',
    path: 'duvidas',
  },
  {
    name: 'Salários',
    path: 'salario',
  },
  {
    name: 'Depoimentos',
    path: 'depoimentos',
  },
  {
    name: 'Avaliações',
    path: 'avaliacoes',
  },
];
const Profession = () => {
  const { profissao } = useParams();
  const history = useHistory();
  const { currentCareer, getCareerById } = useCareers();
  const [hasFollowed, setHasFollowed] = useState(false);

  useEffect(() => {
    getCareerById(profissao);

    const followed = localStorage.getItem('dc-has-followed');

    setHasFollowed(followed === 'true');
  }, []);

  const handleFollow = () => {
    const newHasFollowed = !hasFollowed;

    setHasFollowed(newHasFollowed);
    if (newHasFollowed) {
      localStorage.setItem('dc-has-followed', 'true');
    } else {
      localStorage.setItem('dc-has-followed', 'false');
    }
  };

  return (
    <>

      <PageBackground>
        <Header />
        <PageContainer>
          <ProfessionHeader>
            <CarrerHeader>
              <ProfessionText>{currentCareer?.name}</ProfessionText>
              <Row>
                <Button text={hasFollowed ? 'Seguindo' : 'Seguir'} sufixIcon={hasFollowed ? <Check /> : <Add />} onClick={handleFollow} />
                <Button
                  style={{ marginLeft: 5 }}
                  text="Avaliar"
                  sufixIcon={<RateReview />}
                  onClick={() => {
                    history.push(`/avaliar/${profissao}/1`);
                  }}
                />
              </Row>
            </CarrerHeader>
            <Tabs tabs={tabs} />
          </ProfessionHeader>
          <ContentContainer>
            <ProfissionNavigation />
          </ContentContainer>
        </PageContainer>
      </PageBackground>
    </>
  );
};

export { Profession };
