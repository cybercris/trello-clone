import React from 'react';

import Card from '../Card';

import { Container } from './styles';
import Options from '../../assets/icons/options.svg';

export default function List({ data }) {
  return (
    <Container>
      <header>
        <h2>{data?.title}</h2>
        <button type="button">
          <img src={Options} alt="icon add" />
        </button>
      </header>

      <ul>
        {data?.cards?.map((card, index) => (
          <Card key={card.id} data={card} index={index} />
        ))}
      </ul>
    </Container>
  );
}
