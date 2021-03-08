import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
import styled from 'styled-components';


const toDo = [
  {
    task: 'Clean Shop',
    id: 1,
    completed: false
  },
  {
    task: 'Set-up Gym',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    }
  }
  toggleItem = (clickedItemId) => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if(item.id === clickedItemId) {
          return{
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  clearCompleted = () => {
    this.setState({
      ...this.state, 
      toDo: this.state.toDo.filter(item => !item.completed)
    })

  }

  addItem = (itemName) => {
    const item = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    const newToDo = [...this.state.toDo, item]
    this.setState({
      toDo: newToDo
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <>
        <HeaderStyle>To Do List</HeaderStyle>
        <DivStyle>
      <PageStyle>
        <TodoList toDo={this.state.toDo} toggleItem={this.toggleItem}  />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </PageStyle>
        </DivStyle>
      </>
    );
  }
}
const PageStyle = styled.div`
background-color: pink;
width: 60%;
border-radius: 10px;
padding-top:3%;
padding-bottom: 5%;
border:2px solid purple;

`
const DivStyle = styled.div`
display:flex;
justify-content:center;


`
const HeaderStyle = styled.h2`
display:flex;
justify-content: center;
border-radius: 10px;
color: purple;
font-size: 3rem;
font-weight: bold;
`

export default App;
