import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Card from '../Card';
import { addCardRequest } from '../../store/modules/Board/actions';

import { Container, ButtonAdd, FormAdd, Actions } from './styles';
import Options from '../../assets/icons/options.svg';
import Add from '../../assets/imgs/add.png';

export default function List({ data, listIndex }) {
  const dispatch = useDispatch();

  const [cardTitle, setCardTitle] = useState('');
  const [showForm, setShowform] = useState(false);

  function addToList(value, event) {
    event.preventDefault();

    if (value !== '') {
      dispatch(addCardRequest(value, listIndex));
      setShowform(!showForm);
    }
  }

  function cancelAdd() {
    setShowform(!showForm);
    setCardTitle('');
  }

  return (
    <Container>
      <header>
        <h2>{data?.title}</h2>
        <button type="button">
          <img src={Options} alt="icon options" />
        </button>
      </header>

      <PerfectScrollbar>
        <ul>
          {data?.cards?.map((card, index) => (
            <Card key={card.id} data={card} index={index} />
          ))}
          {!showForm ? (
            <ButtonAdd onClick={() => setShowform(!showForm)}>
              <img src={Add} alt="icon add" />
              TASK
            </ButtonAdd>
          ) : (
            <FormAdd>
              <div>
                <input
                  type="text"
                  placeholder="Insira um título para este cartão..."
                  value={cardTitle}
                  onChange={(e) => setCardTitle(e.target.value)}
                />
              </div>
              <Actions>
                <button type="submit" onClick={(e) => addToList(cardTitle, e)}>
                  Adicionar Cartão
                </button>
                <button type="button" onClick={() => cancelAdd()}>
                  <MdClose size={32} color="#979797" />
                </button>
              </Actions>
            </FormAdd>
          )}
        </ul>
      </PerfectScrollbar>
    </Container>
  );
}
