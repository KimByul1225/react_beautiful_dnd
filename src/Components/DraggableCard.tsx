import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
    margin-bottom: 5px;
`
interface IDraggableCardPropx {
    toDo: string;
    index: number;
}

function DraggableCard({toDo, index}:IDraggableCardPropx) {
    console.log("toDo",toDo);
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(provided) => <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps
            } >{toDo}</Card>}
        </Draggable>
    );
}

export default React.memo(DraggableCard);