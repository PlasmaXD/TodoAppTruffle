import React, { Component } from 'react';
import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

// TodoListコンポーネントを削除
// import TodoList from './components/TodoList';

// TodoContractとweb3のインスタンスを読み込む
import TodoContract from '../contracts/Todo_ABI'; // ここを追加
import web3 from '../contracts/web3'; // ここを追加

class TodoInput extends Component {

    // task:[] → task:'' に変更
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    // onAddTodoを編集
    onAddTodo(event) {
        this.setState({task: event.target.value});
    }

    // TodoCreateを呼び出すための関数を追加
    async onTodoCreate(event) {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        
        // コントラクトのTodoCreateを呼び出してTodoを追加する
        await TodoContract.methods.TodoCreate(this.state.task).send({
          from:accounts[0]
        });
        // トランザクション完了後、ページリロード
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Card className="mt-3 mb-3">
                    <Card.Body>

                        {/* ボタンを押した時に、onTodoCreateが呼び出されるように変更 */}
                        <Form onSubmit={this.onTodoCreate.bind(this)}>
                            <InputGroup>

                                {/* 入力した際に、onAddTodoが呼び出されるように変更 */}
                                <FormControl placeholder="Todoを入力してください" onChange={this.onAddTodo.bind(this)}/>
                                <InputGroup.Append>
                                    <Button type="submit" variant="success">Add</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Card.Body>
                </Card>

                {/* TodoListコンポーネントを削除 */}
                {/* <TodoList task={this.state.task}/> */}
            </div>
        );
    }
}

export default TodoInput;
