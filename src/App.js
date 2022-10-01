import React from 'react';
import { DragDropContext, Droppable, Draggble  } from 'react-beautiful-dnd';


const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
      <DragDropContext onDropEnd={result => console.log(result)}>
      
      </DragDropContext>
    </div>
    
  
  )
}

export default App;