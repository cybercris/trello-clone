import React from "react";

import { Container, Search, Dropdown } from "./styles";
import ArrowDown from "../../assets/icons/arrowdown.svg";

export default function Header() {
  return (
    <Container>
      <h1>Título do Quadro</h1>
      <Search>
        <input type="text" placeholder="Pesquisar" name="" id="" />
        <Dropdown>
          <p>FILTRO AVANÇADO</p>
          <img src={ArrowDown} alt="Icon Arrow Down" />
        </Dropdown>
      </Search>
    </Container>
  );
}
