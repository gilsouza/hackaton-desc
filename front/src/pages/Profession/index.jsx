import { useHistory, useParams } from 'react-router-dom';
import { Add, Check, RateReview } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import {
  ButtonLogo,
  CarrerHeader,
  ContentContainer,
  PageBackground,
  PageContainer,
  ProfessionHeader,
  ProfessionText,
  Row,
} from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';
import { Tabs } from '../../components/Tabs';
import { Button } from '../../components/Button';
import { useCareers } from '../../hooks/Careers';
import { Header } from '../../components/Header';
import { Img } from '../../components/Header/styles';
import logo from '../../assets/logo.svg';

const tabs = [
  {
    name: 'Visão Geral',
    path: '',
  },
  {
    name: 'Dúvidas',
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
  const [hasFollowed, setHasFollowed] = useState([]);

  useEffect(() => {
    getCareerById(profissao);

    const followed = JSON.parse(localStorage.getItem('dc-has-followed'));

    if (!followed) {
      return;
    }

    setHasFollowed(followed);
  }, []);

  const handleFollow = () => {
    if (hasFollowed.includes(currentCareer.id)) {
      const newHasFollowed = hasFollowed.filter((el) => el !== currentCareer.id);

      setHasFollowed(newHasFollowed);

      localStorage.setItem('dc-has-followed', JSON.stringify(newHasFollowed));
      return;
    }

    const newHasFollowed = [...hasFollowed, currentCareer.id];

    setHasFollowed(newHasFollowed);
    localStorage.setItem('dc-has-followed', JSON.stringify(newHasFollowed));
  };

  return (
    <>
      <Header />
      <PageBackground>
        <PageContainer>
          <ProfessionHeader>
            <CarrerHeader>
              <Row>
                <ProfessionText>{currentCareer?.name}</ProfessionText>
                {currentCareer?.link && (
                <ButtonLogo
                  data-tip="Temos esse curso no Descomplica ✓"
                  onClick={() => {
                    window.location.href = currentCareer.link;
                  }}
                >
                  <Img src={logo} alt="logo" height={30} />
                </ButtonLogo>
                )}
              </Row>
              <Row>
                <Button
                  text={hasFollowed.includes(currentCareer ? currentCareer.id : '') ? 'Seguindo' : 'Seguir'}
                  sufixIcon={hasFollowed.includes(currentCareer ? currentCareer.id : '') ? <Check /> : <Add />}
                  onClick={handleFollow}
                />
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
