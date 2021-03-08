import React from 'react'
import styled from 'styled-components';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItemName: ''
        }
    }
    handleChanges = evt => {
        this.setState({
            newItemName: evt.target.value,
        });
    };
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addItem(this.state.newItemName);
        this.setState({
            newItemName: ''
        })
    }
    render() {
        return(
            <FormStyle>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='item'
                        placeholder='new task'
                        value={this.state.newItemName}
                        onChange={this.handleChanges}
                    />
                <ButtonAddStyle onSubmit={this.props.addItem}>+</ButtonAddStyle> 
                </form>
                
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </FormStyle>
        )
    }
}
const FormStyle = styled.div`
display: flex;
justify-content: center;


`
const ButtonAddStyle = styled.button `
    background-color:purple;
    color:pink;
    
    
`
export default TodoForm;