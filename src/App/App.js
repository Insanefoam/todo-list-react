import React, { Component } from 'react'
import Todo from '../Todo/Todo'

class App extends Component{
    state = {
        headerText: 'Todo List'
    }
    
    render() {
        const style = {
            textAlign: 'center',
            fontSize: '30px'
        }
        const todoTextes = ['Помыть кота', 'Почистить зубы', 'Сделать йогу', 
                            'Убрать комнату', 'Посадить дерево']
        const todoElements = todoTextes.map((el) => <Todo text={el}/>)
        return (
            <div>
                <header style={style}>
                    <strong>{this.state.headerText}</strong>
                </header>
                <main>
                    <div>
                        {todoElements}
                    </div>
                </main>
            </div>
        )
    }
}

export default App