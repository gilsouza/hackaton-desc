import {
  HeaderBackground,
  HeaderContainer, Name, Row,
} from './styles';
import snow from '../../assets/snow.png';
import { Avatar } from '../../styles/global-components';
import { Logo } from '../Logo';

const Header = () => (
  <HeaderBackground>
    <HeaderContainer>
      <Logo />
      <Row>
        <Name>Snow</Name>
        <Avatar src={snow} />
      </Row>
    </HeaderContainer>
  </HeaderBackground>
);

export { Header };
