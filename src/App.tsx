import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./Components/DraggableCard";


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


// const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId, destination, source }: DropResult ) => {
    //console.log("arg", args);
    if(!destination) return;
    setToDos(oldToDos => {
      //드래그한 해당 대상의 souce.index를 삭제한다.
      const copyToDos = [...oldToDos];
      copyToDos.splice(source.index, 1);
      //destination.index에 드래그한 대상 넣어주기
      copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos
    })
  };

  return (
    
    <DragDropContext onDragEnd={onDragEnd}> 
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
          {(provided) => <Board ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, index) =>(
                <DraggableCard
                  key={toDo}
                  toDo={toDo}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Board>}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}


export default App;
