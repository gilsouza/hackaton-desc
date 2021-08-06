import { useHistory } from 'react-router-dom';
import {
  HeaderBackground, HeaderContainer, Name, Row,
} from './styles';
import snow from '../../assets/snow.png';
import { Avatar } from '../../styles/global-components';
import { Logo } from '../Logo';

const Header = () => {
  const history = useHistory();

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Logo />
        <Row onClick={() => {
          history.push('/user');
        }}
        >
          <Name>Snow</Name>
          <Avatar src={snow} />
        </Row>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export { Header };
