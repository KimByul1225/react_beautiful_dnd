import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`
const Boards =styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;

`
const Board = styled.div`
  padding: 20px 10px 20px 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`
const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const onDragEnd = () => {

  }
  return (
    
    <DragDropContext onDragEnd={onDragEnd}> 
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">
        {(provided) => <Board ref={provided.innerRef} {...provided.droppableProps}>
          {/* 9, 10, 11 */}

            {toDos.map((toDo, index) => <Draggable draggableId={toDo} index={index}>
              {(provided) => <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps
              } >{toDo}</Card>}
              {/* 12, 13, 14 */}
            </Draggable>)}
            {provided.placeholder}
          </Board>}
        </Droppable>
      </Boards>
    </Wrapper>
      
      
    </DragDropContext>
  );
}


export default App;
