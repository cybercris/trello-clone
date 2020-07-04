/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import Ripples from 'react-ripples';
import { useDispatch } from 'react-redux';

import List from '../List';
// import api from '../../services/api';
import { searchRequest } from '../../store/modules/Board/actions';

import {
  Container,
  BoardHeader,
  Search,
  Button,
  Dropdown,
  Circle,
  Person,
  LeftSection,
  RightSection,
  BoardColumns,
} from './styles';
import Arrowdown from '../../assets/icons/arrowdown.svg';

export default function Board() {
  const dispatch = useDispatch();

  const [board, setBoard] = useState([]);
  const [people, setPeople] = useState([]);
  const [tags, setTags] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // const getPeople = useCallback(async () => {
  //   try {
  //     const { data } = await api.get(`/people`);
  //     setPeople(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // const getTags = useCallback(async () => {
  //   try {
  //     const { data } = await api.get(`/tags`);
  //     setTags(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // const getBoard = useCallback(async () => {
  //   try {
  //     const { data } = await api.get(`/boards`);
  //     setBoard(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   dispatch(searchRequest());
  // }, []);

  return (
    <Container>
      <BoardHeader>
        <h1>{board?.[0]?.title}</h1>
        <Search>
          <input type="text" placeholder="Pesquisar" name="" id="" />
          <Ripples>
            <Button onClick={() => dispatch(searchRequest())}>
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
            <LeftSection>
              {people?.map((person) => (
                <Person key={person.id}>
                  <Circle />
                  <p>{person.name}</p>
                </Person>
              ))}
            </LeftSection>
            <RightSection>
              {tags?.map((tag) => (
                <div key={tag}>
                  <p>{tag}</p>
                </div>
              ))}
            </RightSection>
          </Dropdown>
        )}
      </BoardHeader>
      <BoardColumns>
        {board?.[0]?.columns?.map((list) => (
          <List key={list.id} data={list} />
        ))}
      </BoardColumns>
    </Container>
  );
}
