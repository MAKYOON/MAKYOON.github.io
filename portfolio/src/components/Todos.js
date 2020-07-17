import React, {Component} from 'react';
import Todoitem from "./Todoitem";
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todoitem todo={todo} key={todo.id}/>
        ))
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
