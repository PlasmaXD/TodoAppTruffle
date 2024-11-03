import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Todo from './Todo';

// TodoContractとweb3のインスタンスを読み込む
import TodoContract from '../contracts/Todo_ABI'; //ここを追加
import web3 from '../contracts/web3'; //ここを追加

class TodoList extends Component {

    // Todoの状態をDone(false)にする関数を追加
    async TodoRemove(event) {
        try {
            const accounts = await web3.eth.getAccounts();

            // コントラクトのTodoRemoveを呼び出す
            await TodoContract.methods.TodoRemove(event).send({
                from: accounts[0]
            });
            window.location.reload();
        } catch (err) {
        }
    }

    
    render() {
        const list = this.props.todolist.map((todo,i) => {

            // Todoの状態がtrueの時のみ、処理を通すif文を追加
            if(todo.flag){
                return <Todo {...todo} key={i} TodoRemove={this.TodoRemove.bind(this)}/>;
            }
        });

        return (
            <div>
                <Card>
                    <Card.Header>Todo List</Card.Header>
                    {list}
                </Card>
            </div>
        );
    }
}

export default TodoList;
