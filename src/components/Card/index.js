import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdEdit } from 'react-icons/md';

import { Container } from './styles';

export default function Card({ data, index }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

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
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <div>
        <p>{data?.title}</p>
        <MdEdit />
      </div>

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
