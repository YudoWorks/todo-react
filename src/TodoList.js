import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default function TodoList({ todos, setTodos }) {
  return (
    <div style={{ margin: '1em' }}>
      <ListGroup>
        {
          todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              isDone={todo.isDone}
              setTodos={setTodos}
            />
          ))
        }
      </ListGroup>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  setTodos: PropTypes.func.isRequired,
};
