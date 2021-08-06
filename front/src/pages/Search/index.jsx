import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageContainer, AsyncSelectStyled,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Logo } from '../../components/Logo';

const Search = () => {
  const { getCareersByFragment } = useCareers();
  const history = useHistory();

  const [searchText, setSearchText] = useState('');

  const searchCareers = async () => {
    const carrers = await getCareersByFragment(searchText, false);
    if (searchText) {
      return carrers.map((c) => ({ ...c, label: c.name }));
    }
    return [];
  };

  const handleCardClick = (id) => {
    history.push(`/profissao/${id}/`);
  };

  return (
    <PageContainer>
      <Logo size="lg" />
      <AsyncSelectStyled
        loadOptions={searchCareers}
        placeholder="Busque por uma carreira"
        onInputChange={setSearchText}
        onChange={(option) => handleCardClick(option.id)}
        noOptionsMessage={() => 'Não encontramos nenhuma carreira com esse nome :('}
      />
    </PageContainer>
  );
};

export { Search };
