import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`
const Boards =styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

`



// const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId, destination, source }: DropResult ) => {
    //console.log("arg", args);
    if(!destination) return;
    // setToDos(oldToDos => {
    //   //드래그한 해당 대상의 souce.index를 삭제한다.
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   //destination.index에 드래그한 대상 넣어주기
    //   copyToDos.splice(destination?.index, 0, draggableId);
    //   return copyToDos
    // })
  };

  return (
    
    <DragDropContext onDragEnd={onDragEnd}> 
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}


export default App;
