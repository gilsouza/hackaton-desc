import SearchIcon from '@material-ui/icons/Search';
import { PageContainer, SearchInput, SearchContainer } from './styles';

const Search = () => (
  <PageContainer>
    <SearchContainer>
      <SearchInput placeholder="busque sua profissão aqui" />
      <SearchIcon />
    </SearchContainer>
  </PageContainer>
);

export { Search };
