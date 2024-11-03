import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import TodoInput from './components/TodoInput';
import TodoContract from './contracts/Todo_ABI';
import web3 from './contracts/web3';

// TodoListコンポーネントの読み込み
import TodoList from './components/TodoList'; // ここを追加

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      todolist: []
    }
  }
  
  async componentWillMount() {

    const accounts = await web3.eth.getAccounts();
    const result = await TodoContract.methods.getTodosByOwner(accounts[0]).call();
    
    await Promise.all(result.map(async number => { 
      return await TodoContract.methods.todos(number).call();
    })).then(value => {
      console.log(value);
      this.setState({todolist: value});
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">TodoApp</Navbar.Brand>
          </Navbar>
          <TodoInput />

          {/* TodoListコンポーネントの呼び出し */}
          <TodoList todolist={this.state.todolist}/>
        </Container>
      </div>
    );
  }
}

export default App;
