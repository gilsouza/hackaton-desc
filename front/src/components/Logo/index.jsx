import { HeaderText, Img, LeftContainer } from '../Header/styles';
import logo from '../../assets/logo.svg';

const Logo = ({ size = 'md' }) => (
  <LeftContainer onClick={() => window.location.replace('/')}>
    <Img src={logo} alt="logo" height={size === 'lg' ? 100 : 50} />
    <HeaderText size={size}>
      <span>descomplica</span>
      <span>carreiras</span>
    </HeaderText>
  </LeftContainer>
);

export { Logo };
