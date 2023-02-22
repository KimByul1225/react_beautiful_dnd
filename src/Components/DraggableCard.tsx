import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import styled from 'styled-components';

const Card = styled.div<{ isDragging:boolean }>`
    border-radius: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.isDragging ? "#74b9ff" : props.theme.cardColor};
    margin-bottom: 5px;
    box-shadow: ${(props) => props.isDragging ? "0px 2px 5px  rgba(0,0,0,0.5)" : "none"};
`
interface IDraggableCardPropx {
    toDoId: number;
    toDoText: string;
    index: number;
}

function DraggableCard({toDoId, toDoText, index}:IDraggableCardPropx) {
    // console.log("toDo",toDo);
    return (
        <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
            {(provided, snapshot) => (
                <Card 
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    {toDoText}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);