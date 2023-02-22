import React, { useRef } from 'react';
import {Droppable} from "react-beautiful-dnd";
import DraggableCard from './DraggableCard';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { ITodo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';

const Wrapper = styled.div`
    padding-top: 10px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    min-height: 300px;
    display: flex;
    flex-direction: column;

`
const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IAreaProps{
    isDraggingOver: boolean;
    isDraggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
    padding: 20px;
    background-color: ${props => props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThisWith? "#b2bec3" : "transparent"};
    flex-grow: 1;
    transition: background-color .3s ease-in-out;
`

const Form = styled.form`
    width: 100%;
    input{
        width: 100%;

    }
`;

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}

interface IForm{
    toDo: string
}

function Board({toDos, boardId}: IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue, getValues } = useForm< IForm >();

    const onValid = ({toDo}: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo
        };
        setToDos(allBoards => {
            return{
                ...allBoards,
                [boardId]: [
                    ...allBoards[boardId],
                    newToDo
                ]
            }
        })
        setValue("toDo", "");
    }






    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input 
                    {...register("toDo", {required : true})}
                    type="text"
                    placeholder={`${boardId}를 적어주세요.`} 
                />
                <button>입력</button>
            </Form>
            {/* <input 
                type="text" 
                placeholder="작성해주세요." 
                ref={inputRef}
            /> */}
            <Droppable droppableId={boardId}>
                {(provided, snapshot) => (
                <Area 
                //snapthot을 통해 드래해서 board로 들어오고 떠났는지 여부를 styled 컴포넌트로 넘긴다.
                isDraggingOver={snapshot.isDraggingOver} 
                isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
                ref={provided.innerRef} 
                {...provided.droppableProps}>
                    {toDos.map((toDo, index) => (
                    <DraggableCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text}/>
                    ))}
                    {provided.placeholder}
                </Area>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;