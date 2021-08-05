import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from './styles';
import ProfissionNavigation from '../../navigations/ProfissionNavigation';

const Profession = () => {
  const { profissao } = useParams();
  return (
    <PageContainer>
      Profissão
      {profissao}
      <ProfissionNavigation />
    </PageContainer>
  );
};

export { Profession };
