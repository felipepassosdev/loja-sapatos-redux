import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
}

export default Header