import React from 'react';
import HeaderLogo from '../../assets/images/marvel_logo.png';

import { Container, LogoImage, Underline } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoImage source={HeaderLogo} />
      <Underline />
    </Container>
  );
};

export default Header;
