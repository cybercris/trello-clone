import React, { useRef, useState, useContext, useMemo } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { MdEdit, MdClose, MdDeleteForever } from 'react-icons/md';

import BoardContext from '../Board/context';

import {
  deleteCardRequest,
  editCardRequest,
} from '../../store/modules/Board/actions';

import { Container, Info, Actions, LastContent, Circle } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.Board.tags);
  const people = useSelector((state) => state.Board.people);
  const [showForm, setShowForm] = useState(false);
  const [cardTitle, setCardTitle] = useState(data?.title ? data?.title : '');
  const options = useMemo(
    () => tags.map((tag) => ({ value: tag, label: tag })),
    [tags]
  );
  const optionsP = useMemo(
    () => people.map((owner) => ({ value: owner.id, label: owner.name })),
    [people]
  );
  const [selectedOptions, setSelectedOptions] = useState(
    data?.tags
      ? data.tags.map((tag) => ({
          value: tag,
          label: tag,
        }))
      : []
  );
  const [selectedOptionsP, setSelectedOptionsP] = useState(
    data?.owners
      ? data.owners.map((owner) => ({
          value: owner.id,
          label: owner.name,
        }))
      : []
  );

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
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

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  function cancelEdit() {
    setShowForm(!showForm);
    setCardTitle(data?.title);
  }

  function editCard(e, title) {
    e.preventDefault();

    const newCard = {
      id: data.id,
      title,
      tags: selectedOptions.map((option) => option.value),
      owners: selectedOptionsP.map((option) => {
        return people.find((person) => person.id === option.value);
      }),
    };

    dispatch(editCardRequest(newCard, listIndex));
    setShowForm(!showForm);
  }

  return (
    <>
      {!showForm ? (
        <Container ref={ref} isDragging={isDragging}>
          <div style={{ justifyContent: 'space-between' }}>
            <p>{data?.title}</p>
            <button onClick={() => setShowForm(!showForm)}>
              <MdEdit size={20} color="#707070" />
            </button>
          </div>

          <Info>
            <div>
              {data?.tags?.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </Info>
          <LastContent nomargin>
            {data?.owners?.map((owner) => {
              const spltName = owner.name.toUpperCase().split(' ');

              return owner.photoUrl ? (
                <img src={owner.photoUrl} alt="" />
              ) : (
                <Circle>{spltName[0][0] + spltName[1][0]}</Circle>
              );
            })}
          </LastContent>
        </Container>
      ) : (
        <>
          <Container>
            <div>
              <input
                type="text"
                value={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                autoFocus
              />
              <div>
                <button>
                  <MdDeleteForever
                    size={20}
                    color="#ff0000"
                    onClick={() =>
                      dispatch(deleteCardRequest(data.id, listIndex))
                    }
                  />
                </button>
                <button onClick={() => setShowForm(!showForm)}>
                  <MdEdit size={20} color="#707070" />
                </button>
              </div>
            </div>

            <Info>
              <div>
                <div>
                  {data?.tags?.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              </div>

              <img src="" alt="" />
            </Info>
          </Container>
          <Select
            isMulti
            name="tags"
            placeholder="Selecione as tags..."
            options={options}
            value={selectedOptions}
            onChange={setSelectedOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <div style={{ marginBottom: '10px' }}></div>
          <Select
            isMulti
            name="owners"
            placeholder="Selecione os responsáveis pelo card..."
            options={optionsP}
            value={selectedOptionsP}
            onChange={setSelectedOptionsP}
            className="basic-multi-select"
            classNamePrefix="select"
          />

          <Actions>
            <button type="submit" onClick={(e) => editCard(e, cardTitle)}>
              Salvar
            </button>
            <button type="button" onClick={() => cancelEdit()}>
              <MdClose size={32} color="#979797" />
            </button>
          </Actions>
        </>
      )}
    </>
  );
}
