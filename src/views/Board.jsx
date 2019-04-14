import React, { Component } from 'react';
import Task from "../components/task.jsx";
import './board.scss';


class Board extends Component {
    state = {
        inputButton: '',
        newTaskText: '',
        placeHolder: 'add task',
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        
    };

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    addTask = (text, numeroTarea) => {
        let newTask = {
            text,
            numeroTarea,
            createAt: new Date()
        };

        this.setState({
            tasks: [newTask, ...this.state.tasks],
            newTaskText: '',
        });
    }

    handleChange = (ev) => {
        this.setState({
            newTaskText: ev.target.value,
            inputButton: ev.target.value
        });

        //console.log('handleChange')
    }

    handleKeyUp = (ev) => {
        //console.log('handle KEYUP')

        if (ev.keyCode === 13) {
            this.addTask(
                ev.target.value,
                this.state.tasks.length + 1
            );

        }

    }

    inputButton = () => {
        //console.log('handle handleButton')

        this.addTask(
            this.state.inputButton,
            this.state.tasks.length + 1
        );

        this.setState({
            inputButton: ''
        });
    }

    
    removeTask = (id)=> {
        console.log('remove');
        
        this.setState({
            tasks: this.state.tasks.filter( task => task.numeroTarea !== id)
        })
    }


    render() {
        return (
            <div className="board">
                <header>

                    <input
                        type="text"
                        name="task"
                        placeholder={this.state.placeHolder}
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                        value={this.state.newTaskText}
                    />

                    <button
                        className="addTask"
                        onClick={this.inputButton}
                    >
                        +
                    </button>

                    <span>
                        Nº de tareas: {this.state.tasks.length}
                    </span>

                </header>

                <main className="tasks" >
                    {this.state.tasks.map((task) => <Task data={task} deleteTask={this.removeTask}/>)}

                </main>

            </div>
        );
    }
}

export default Board;
