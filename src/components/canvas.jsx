import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./card.jsx";

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveCard(item.id, left, top);
    },
  });

  const moveCard = (id, left, top) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, left, top } : card))
    );
  };

  const addCard = () => {
    setCards([
      ...cards,
      { id: cards.length, left: 0, top: 0, text: "card " + (cards.length + 1) },
    ]);
  };

  return (
    <div
      ref={drop}
      className="relative flex  bg-zinc-500 border border-black w-full h-screen"
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          left={card.left}
          top={card.top}
          text={card.text}
        />
      ))}
      <button
        className="w-40 z-30 mx-auto my-auto h-16 hover:text-xl hover:scale-105  transition-all p-4  rounded-md bg-slate-700 text-center"
        onClick={addCard}
      >
        Add Card
      </button>
    </div>
  );
};

export default Canvas;
