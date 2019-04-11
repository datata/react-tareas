import React, { Component } from 'react';

import './board.scss';



class Board extends Component {
    render() {
        return (
            <div className="board">
                <header>
                    <input type="text" placeholder="tarea"/>
                </header>

                <main className="Tasks">
                    <div className="task">
                        Programar
                    </div>
                        
                    <div className="task">
                        Dormir
                    </div>

                    <div className="task">
                        Comer
                    </div>
                </main>

            </div>
        );
    }
}

export default Board;
