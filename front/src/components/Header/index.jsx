import {
  HeaderContainer, Name, Row,
} from './styles';
import snow from '../../assets/snow.png';
import { Avatar } from '../../styles/global-components';
import { Logo } from '../Logo';

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Row>
      <Name>Snow</Name>
      <Avatar src={snow} />
    </Row>
  </HeaderContainer>
);

export { Header };
