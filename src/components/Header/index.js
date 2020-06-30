import React, { useState, useCallback, useEffect } from 'react';
import Ripples from 'react-ripples';

import api from '../../services/api';

import { Container, Search, Button, Dropdown, Circle, Person } from './styles';
import Arrowdown from '../../assets/icons/arrowdown.svg';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [people, setPeople] = useState([]);
  const [tags, setTags] = useState([]);

  const getPeople = useCallback(async () => {
    try {
      const { data } = await api.get(`/people`);
      setPeople(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getTags = useCallback(async () => {
    try {
      const { data } = await api.get(`/tags`);
      setTags(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getPeople();
    getTags();
  }, [getPeople, getTags]);

  return (
    <Container>
      <h1>Título do Quadro</h1>
      <Search>
        <input type="text" placeholder="Pesquisar" name="" id="" />
        <Ripples>
          <Button onClick={() => setShowDropdown(!showDropdown)}>
            FILTRO AVANÇADO
            <img
              src={Arrowdown}
              className={showDropdown ? 'rotate' : undefined}
              alt="icon arrow"
            />
          </Button>
        </Ripples>
      </Search>
      {showDropdown && (
        <Dropdown>
          {people.map((person) => (
            <Person key={person.id}>
              <Circle />
              <p>{person.name}</p>
            </Person>
          ))}
        </Dropdown>
      )}
    </Container>
  );
}
