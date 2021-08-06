import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  AbsoluteWithAnimation, AsyncSelectStyled, PageContainer,
} from './styles';
import { useCareers } from '../../hooks/Careers';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';

const Search = () => {
  const { getCareersByFragment } = useCareers();
  const [careerSelected, setCareerSelected] = useState(false);
  const history = useHistory();

  const [defaultValue, setDefaultValue] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function load() {
      const { data } = await axios.get('https://hackaton-desc.herokuapp.com/careers');

      setDefaultValue(data.map((c) => ({ ...c, label: c.name })));
    }

    load();
  }, []);

  const searchCareers = async () => {
    const carrersRes = await getCareersByFragment(searchText, false);
    if (searchText) {
      return carrersRes.map((c) => ({ ...c, label: c.name }));
    }
    return carrersRes;
  };

  const handleCardClick = (id) => {
    setCareerSelected(true);
    setTimeout(() => {
      history.push(`/profissao/${id}/`);
    }, 2000);
  };

  const handleRankingClick = () => {
    setCareerSelected(true);
    setTimeout(() => {
      history.push('/rankings');
    }, 2000);
  };

  return (
    <PageContainer>
      <AbsoluteWithAnimation careerSelected={careerSelected}>
        <Logo size={careerSelected ? 'md' : 'lg'} />
      </AbsoluteWithAnimation>
      {!careerSelected && (
        <AsyncSelectStyled
          defaultOptions={defaultValue}
          loadOptions={searchCareers}
          placeholder="Busque por uma carreira"
          onInputChange={setSearchText}
          onChange={(option) => handleCardClick(option.id)}
          noOptionsMessage={() => 'Não encontramos nenhuma carreira com esse nome :('}
        />
      )}
      {!careerSelected && (
      <Button
        text="Ranking de Carreiras"
        onClick={handleRankingClick}
        style={{
          marginTop: 10,
          borderRadius: 5,
          width: 800,
        }}
      />
      )}
    </PageContainer>
  );
};

export { Search };
