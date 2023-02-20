import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import DraggableCard from './DraggableCard';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 10px 20px 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 200px;
`
interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(provided) => <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) =>(
                <DraggableCard
                    key={toDo}
                    toDo={toDo}
                    index={index}
                />
                ))}
                {provided.placeholder}
            </Wrapper>}
        </Droppable>
    );
}

export default Board;