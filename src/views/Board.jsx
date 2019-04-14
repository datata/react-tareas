import React, { Component } from 'react';
import Task from "../components/task.jsx";
import './board.scss';




class Board extends Component {
    state = {
        
        newTaskText: '',
        placeHolder: 'add task',
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    };

    // handleChange = (ev) => {
    //     this.setState({ [ev.target.name]: ev.target.value });
    //     console.log({ [ev.target.name]: ev.target.value });
    // }

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    addTask = (text,id) => {
        let newTask = { text,id };
        this.setState({
            tasks: [newTask, ...this.state.tasks],
            newTaskText: '',

        });
    }

    handleChange = (ev) => {
        this.setState({ newTaskText: ev.target.value })
        console.log('handleChange')
    }

    handleKeyUp = (ev) => {
        console.log('handle KEYUP')
        if (ev.keyCode === 13) {
            this.addTask(ev.target.value,this.state.tasks.length+1);
        }

    }


    render() {
        return (
            <div className="board">
                <header>
                    <input type="text" name="task" placeholder={this.state.placeHolder} onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.newTaskText} />
                    <button className="addTask">+</button>
                    <span> Nº de tareas: {this.state.tasks.length}</span>
                </header>

                <main className="tasks" >
                    {this.state.tasks.map((task) => <Task text={task.text} />)}

                </main>

            </div>
        );
    }
}

export default Board;
