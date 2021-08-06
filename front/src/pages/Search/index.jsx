import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PageContainer, AsyncSelectStyled, AbsoluteWithAnimation,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Logo } from '../../components/Logo';

const Search = () => {
  const { getCareersByFragment } = useCareers();
  const [careerSelected, setCareerSelected] = useState(false);
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
    setCareerSelected(true);
    setTimeout(() => {
      history.push(`/profissao/${id}/`);
    }, 2000);
  };

  return (
    <PageContainer>
      <AbsoluteWithAnimation careerSelected={careerSelected}>
        <Logo size={careerSelected ? 'md' : 'lg'} />
      </AbsoluteWithAnimation>
      {!careerSelected && (
      <AsyncSelectStyled
        loadOptions={searchCareers}
        placeholder="Busque por uma carreira"
        onInputChange={setSearchText}
        onChange={(option) => handleCardClick(option.id)}
        noOptionsMessage={() => 'Não encontramos nenhuma carreira com esse nome :('}
      />
      )}
    </PageContainer>
  );
};

export { Search };
