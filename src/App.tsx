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

  const onDragEnd = ( info: DropResult ) => {
    console.log("arg", info);
    const {destination, source, draggableId} = info;

    //같은 보드 내에서 움직임
    if(destination?.droppableId === source.droppableId){
      
      setToDos((oldToDos) => {
        //atom 객체에서 선택한 ID가 있는 배열을 선택
        const boardCopy = [...oldToDos[source.droppableId]]

        //드래그한 해당 대상의 souce.index를 삭제한다.
        boardCopy.splice(source.index, 1);
        //destination.index에 드래그한 대상 넣어주기
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy
        }
      })
    }

    
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
