import React, { Component } from 'react';

import './task.scss';



class Task extends Component {
    render() {

        return (

            <div className="task">
                <div className="text">{this.props.data.text}</div>
                <div className="actions">
                    <button onClick = {() => this.props.deleteTask(this.props.data.numeroTarea)}> delete</button>
                </div>
            </div>


        );
    }
}

export default Task;
