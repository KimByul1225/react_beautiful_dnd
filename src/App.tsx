import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {

  }
  return (
    
    <DragDropContext onDragEnd={onDragEnd}> 
      <Droppable droppableId="one">
        {(provided) => <ul ref={provided.innerRef} {...provided.droppableProps}>
          {/* 9, 10, 11 */}

            <Draggable draggableId="first" index={0}>
              {(provided) => <li ref={provided.innerRef} {...provided.draggableProps} ><span {...provided.dragHandleProps
              }>⭐️</span>111</li>}
              {/* 12, 13, 14 */}
            </Draggable>
            
            <Draggable draggableId="second" index={1}>
              {(provided) => <li ref={provided.innerRef} {...provided.draggableProps} ><span {...provided.dragHandleProps
              }>⭐️</span>222</li>}
              {/* 12, 13, 14 */}
            </Draggable>
          </ul>}
      </Droppable>
      
    </DragDropContext>
  );
}


export default App;
