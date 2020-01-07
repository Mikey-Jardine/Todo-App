import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

    state = {  }
    render() { 
        const { id, title} = this.props.todo;
        return ( 
            <div style={this.getStyle()} > 
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.deleteTodo} style={btnStyle}>x</button>

                </p>
            </div>
         );
    }
}
 
// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem;