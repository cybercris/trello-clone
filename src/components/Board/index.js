/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';
import produce, { current } from 'immer';
import { MdCancel } from 'react-icons/md';

import BoardContext from './context';
import List from '../List';
import {
  searchRequest,
  updateListRequest,
  addColumnRequest,
  filterCards,
} from '../../store/modules/Board/actions';

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
  ButtonAdd,
  FormCol,
  TagButton,
} from './styles';
import Arrowdown from '../../assets/icons/arrowdown.svg';
import Add from '../../assets/imgs/add.png';

export default function Board() {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState(false);

  const board = useSelector((state) =>
    filtered ? state.Board.filteredBoard : state.Board.board
  );
  const people = useSelector((state) => state.Board.people);
  const tags = useSelector((state) => state.Board.tags);
  const loading = useSelector((state) => state.Board.loading);

  const lists = board.columns;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [colTitle, setColTitle] = useState('');
  const [ownersSelected, setOwnersSelected] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(searchRequest());
  }, []);

  function move(fromList, toList, from, to) {
    dispatch(
      updateListRequest(
        produce(lists, (draft) => {
          const dragged = draft[fromList].cards[from];

          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
        })
      )
    );
  }

  function addColumn(e, title) {
    e.preventDefault();

    if (colTitle !== '') {
      dispatch(addColumnRequest(title));
      setShowForm(!showForm);
    }
  }

  function callFilter(e) {
    e.preventDefault();

    dispatch(filterCards(query, null, null));
    setFiltered(true);
  }

  function applyAdvancedFilter() {
    dispatch(filterCards(query, tagsSelected, ownersSelected));
    setFiltered(true);
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container isLoading={loading}>
        {loading ? (
          <PulseLoader size={30} color="#707070" />
        ) : (
          <>
            <BoardHeader>
              <h1>{board?.title}</h1>
              <Search>
                <form onSubmit={(e) => callFilter(e)}>
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                  />
                </form>
                <Button onClick={() => setShowDropdown(!showDropdown)}>
                  FILTRO AVANÇADO
                  <img
                    src={Arrowdown}
                    className={showDropdown ? 'rotate' : undefined}
                    alt="icon arrow"
                  />
                </Button>
              </Search>
              {showDropdown && (
                <Dropdown>
                  <LeftSection>
                    {people?.map((person) => {
                      const spltName = person.name.toUpperCase().split(' ');

                      return (
                        <button
                          key={person.id}
                          onClick={() => {
                            let newList;
                            if (
                              ownersSelected?.find(
                                (owner) => owner.id === person.id
                              )
                            ) {
                              newList = ownersSelected.filter(
                                (owner) => owner.id !== person.id
                              );
                            } else {
                              newList = [...ownersSelected, person];
                            }
                            setOwnersSelected(newList);
                          }}
                        >
                          <Person
                            isSelected={
                              ownersSelected?.filter(
                                (owner) => owner.id === person.id
                              )?.length > 0
                            }
                          >
                            {person.photoURL ? (
                              <img src={person.photoURL} alt="person avatar" />
                            ) : (
                              <Circle
                                isSelected={
                                  ownersSelected?.filter(
                                    (owner) => owner.id === person.id
                                  )?.length > 0
                                }
                              >
                                {spltName[0][0] + spltName[1][0]}
                              </Circle>
                            )}
                            <p>{person.name}</p>
                          </Person>
                        </button>
                      );
                    })}
                  </LeftSection>
                  <RightSection>
                    {tags?.map((tag) => (
                      <TagButton
                        key={tag}
                        isSelected={tagsSelected?.includes(tag)}
                        onClick={() => {
                          let newList;
                          if (tagsSelected?.includes(tag)) {
                            newList = tagsSelected.filter(
                              (currentTag) => currentTag !== tag
                            );
                          } else {
                            newList = [...tagsSelected, tag];
                          }
                          setTagsSelected(newList);
                        }}
                      >
                        <div>
                          <p>{tag}</p>
                        </div>
                      </TagButton>
                    ))}
                  </RightSection>
                  {(ownersSelected.length > 0 || tagsSelected.length > 0) && (
                    <button onClick={() => applyAdvancedFilter()}>
                      Aplicar filtros
                    </button>
                  )}
                </Dropdown>
              )}
            </BoardHeader>
            <BoardColumns>
              {lists?.map((list, index) => (
                <List key={list.id} data={list} listIndex={index} />
              ))}
              {!showForm ? (
                <ButtonAdd onClick={() => setShowForm(!showForm)}>
                  <img src={Add} alt="icon add" />
                  COLUNA
                </ButtonAdd>
              ) : (
                <FormCol onSubmit={(e) => addColumn(e, colTitle)}>
                  <input
                    type="text"
                    autoFocus
                    value={colTitle}
                    onChange={(e) => setColTitle(e.target.value)}
                  />
                  <MdCancel size={26} onClick={() => setShowForm(!showForm)} />
                </FormCol>
              )}
            </BoardColumns>
          </>
        )}
      </Container>
    </BoardContext.Provider>
  );
}
