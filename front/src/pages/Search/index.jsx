import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router-dom';
import {
  PageContainer, SearchInput, SearchContainer, SearchFrom, NotFoundText, CareerCard, CareerCardText,
} from './styles';
import { useCareers } from '../../hooks/Careers';

const Search = () => {
  const { getCareersByFragment, careers } = useCareers();
  const history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [hasSearchedCareer, setHasSearchedCareer] = useState(false);

  const handleInputChange = (event) => {
    setHasSearchedCareer(false);

    setSearchText(event.target.value);
  };

  const searchCareers = async (event) => {
    event.preventDefault();

    if (searchText) {
      getCareersByFragment(searchText);

      setHasSearchedCareer(true);
    } else {
      setHasSearchedCareer(false);
    }
  };

  const handleCardClick = (id) => {
    history.push(`/profissao/${id}/`);
  };

  const renderSearchResult = () => {
    if (careers.length === 0) {
      if (!hasSearchedCareer) {
        return null;
      }

      return <NotFoundText>Não encontramos nenhuma carreira com esse nome :(</NotFoundText>;
    }

    return (careers.map((career) => (
      <CareerCard key={career.id} onClick={() => { handleCardClick(career.id); }}>
        <CareerCardText>{career.name}</CareerCardText>
        <ChevronRightIcon />
      </CareerCard>
    )));
  };

  return (
    <PageContainer>
      <SearchContainer>
        <SearchFrom onSubmit={searchCareers}>
          <SearchInput value={searchText} onInput={handleInputChange} placeholder="Busque por uma carreira" />
        </SearchFrom>
        <SearchIcon />
      </SearchContainer>
      {renderSearchResult()}
    </PageContainer>
  );
};

export { Search };
