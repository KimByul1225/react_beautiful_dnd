import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {

  }
  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {() => <ul>
            <Draggable draggableId="first" index={0}>
              {() => <li>111</li>}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {() => <li>aaa</li>}
            </Draggable>
          </ul>}
      </Droppable>
      
    </DragDropContext>
  );
}


export default App;
