import {
  Avatar,
  HeaderContainer, HeaderText, Img, LeftContainer, Name, Row,
} from './styles';
import logo from '../../assets/logo.svg';
import snow from '../../assets/snow.png';

const Header = () => (
  <HeaderContainer>
    <LeftContainer onClick={() => window.location.replace('/')}>
      <Img src={logo} alt="logo" height={50} />
      <HeaderText>
        <span>descomplica</span>
        <span>carreiras</span>
      </HeaderText>
    </LeftContainer>
    <Row>
      <Name>Gugu Snow</Name>
      <Avatar src={snow} />
    </Row>
  </HeaderContainer>
);

export { Header };
