import React from 'react';
import { PageContainer } from './styles';
import ProfissionNavigation from "../../navigations/ProfissionNavigation";
import { useParams} from "react-router-dom";

const Profession = () => {
  const {profissao} = useParams()
  return <PageContainer>Profissão {profissao}
  <ProfissionNavigation/></PageContainer>;
};

export { Profession };
