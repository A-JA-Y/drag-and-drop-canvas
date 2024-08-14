import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './components/canvas.jsx';

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900'>

    <DndProvider backend={HTML5Backend}>
      <Canvas />
    </DndProvider>
    </div>
  );
};

export default App;
