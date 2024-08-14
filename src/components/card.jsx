import React from 'react';
import { useDrag } from 'react-dnd';

const Card = ({ id, left, top, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <textarea
    rows="40" cols="20"
      ref={drag}
      className={`w-1/6 resize h-40  p-4 bg-zinc-200 cursor-default text-center rounded-md drop-shadow-2xl border  border-black absolute ${isDragging ? 'opacity-50' : ''}`}
      style={{ left, top }}
      
    >
      {text}
    </textarea>
  );
};

export default Card;
