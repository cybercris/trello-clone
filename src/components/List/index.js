import React from 'react';

import Card from '../Card';

import { Container } from './styles';
import Options from '../../assets/icons/options.svg';

export default function List() {
  return (
    <Container>
      <header>
        <h2>A INICIAR</h2>
        <button type="button">
          <img src={Options} alt="icon add" />
        </button>
      </header>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
