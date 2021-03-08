import React from 'react'
import styled from 'styled-components';

const ToDo = props => {
    return(
        <DivStyle 
        onClick={() => props.toggleItem(props.item.id)}
        className={`item${props.item.completed ? ' completed' : ''}`}>
            <ParaStyle>{props.item.task}</ParaStyle>
        </DivStyle>
    )
}
const DivStyle = styled.div `
display: flex;
justify-content: center;
`
const ParaStyle = styled.p`
color: purple;


`

export default ToDo;