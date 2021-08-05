import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  PageContainer, SearchInput, SearchContainer, SearchFrom, NotFoundText, CareerCard, CareerCardText,
} from './styles';

const Search = () => {
  const history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [careersSearchResult, setCareersSearchResult] = useState([]);
  const [hasSearchedCareer, setHasSearchedCareer] = useState(false);

  const handleInputChange = (event) => {
    setHasSearchedCareer(false);

    setSearchText(event.target.value);
  };

  const searchCareers = async (event) => {
    event.preventDefault();

    if (searchText) {
      const { data } = await axios.get(`https://hackaton-desc-back.vercel.app/careers?q=${searchText}`);

      setHasSearchedCareer(true);

      setCareersSearchResult(data);
    } else {
      setHasSearchedCareer(false);

      setCareersSearchResult([]);
    }
  };

  const handleCardClick = (id) => {
    history.push(`/profissao/desenvolvedor/${id}`);
  };

  const renderSearchResult = () => {
    if (careersSearchResult.length === 0) {
      if (!hasSearchedCareer) {
        return null;
      }

      return <NotFoundText>Não encontramos nenhuma carreira com esse nome :(</NotFoundText>;
    }

    return (careersSearchResult.map((career) => (
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
          <SearchInput value={searchText} onInput={handleInputChange} placeholder="busque por uma carreira" />
        </SearchFrom>
        <SearchIcon />
      </SearchContainer>
      {renderSearchResult()}
    </PageContainer>
  );
};

export { Search };
