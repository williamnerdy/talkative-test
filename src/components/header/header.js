import React from 'react';
import Container from '../container';
import ReaderMessage from '../header-message';
import './style.css';

const Header = () => (
  <header className="header">
    <Container>
      <ReaderMessage>Hello World!</ReaderMessage>
    </Container>
  </header>
);

export default Header;
