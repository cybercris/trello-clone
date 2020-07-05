import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose, MdDeleteSweep } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';

import Card from '../Card';
import {
  addCardRequest,
  editColumnRequest,
  deleteColumnRequest,
} from '../../store/modules/Board/actions';

import { Container, ButtonAdd, FormAdd, Actions } from './styles';
import Options from '../../assets/icons/options.svg';
import Add from '../../assets/imgs/add.png';

export default function List({ data, listIndex }) {
  const dispatch = useDispatch();
  const ref = useRef();

  const [cardTitle, setCardTitle] = useState('');
  const [columnTitle, setColumnTitle] = useState(
    data?.title ? data?.title : ''
  );
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'LIST', listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'LIST',
    hover(item, monitor) {
      const draggedIndex = item.listIndex;
      const targetIndex = listIndex;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      // move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.listIndex = targetIndex;
      // item.listIndex = targetListIndex;

      // dispatch(moveCard(draggedListIndex, draggedIndex, targetIndex));
    },
  });

  dragRef(dropRef(ref));

  function addToList(value, event) {
    event.preventDefault();

    if (value !== '') {
      dispatch(addCardRequest(value, listIndex));
      setShowForm(!showForm);
    }
  }

  function cancelAdd() {
    setShowForm(!showForm);
    setCardTitle('');
  }

  function editCol(e, title) {
    e.preventDefault();

    console.log(title);

    if (columnTitle !== '') {
      dispatch(editColumnRequest(title, listIndex));
      setShowEditForm(!showEditForm);
    }
  }

  return (
    <Container ref={ref} isDragging={isDragging}>
      {!showEditForm ? (
        <header>
          <h2>{data?.title}</h2>

          <button type="button" onClick={() => setShowEditForm(!showEditForm)}>
            <img src={Options} alt="icon options" />
          </button>
        </header>
      ) : (
        <header>
          <form onSubmit={(e) => editCol(e, columnTitle)}>
            <input
              type="text"
              value={columnTitle}
              onChange={(e) => setColumnTitle(e.target.value)}
              autoFocus
            />
          </form>

          <div>
            <MdDeleteSweep
              size={25}
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteColumnRequest(data.id))}
            />
            <button type="button">
              <img
                src={Options}
                alt="icon options"
                onClick={() => setShowEditForm(!showEditForm)}
              />
            </button>
          </div>
        </header>
      )}

      <ul>
        {data?.cards?.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
        {!showForm ? (
          <ButtonAdd onClick={() => setShowForm(!showForm)}>
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
    </Container>
  );
}
