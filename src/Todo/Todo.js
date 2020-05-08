import React, { Component } from 'react'
import Radium from 'radium'

class Todo extends Component {
    constructor(props) {
        super();
        this.state = {
            text: props.text
        }
    }

    render() {
        const style = {
            fontSize: '25px',
            border: '2px solid #ccc',
            textAlign: 'center',
            padding: '20px 0 20px 0',
            margin: '20px 300px 20px 300px',
            ':hover': {
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            },
            transition: 'box-shadow 0.3s'
        }

        return(
            <div style={style}>    
                <div>{this.state.text}</div>
                <input value={this.state.text} type="text"></input>
            </div>
        )
    }
}

export default Radium(Todo)