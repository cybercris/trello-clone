import React from 'react';

import { Container } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <p>{data?.title}</p>

      <footer>
        <div>
          {data?.tags?.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <img src="https://api.adorable.io/avatars/abott@adorable.png" alt="" />
      </footer>
    </Container>
  );
}
