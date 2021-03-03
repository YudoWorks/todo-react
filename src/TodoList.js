import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default function TodoList({todos, setTodos}) {
  return (
    <div style={{margin: "1em"}}>
      <ListGroup>
        {
          todos.map(todo => {
            return <Todo key={todo.id} text={todo.text} id={todo.id} setTodos={setTodos} todos={todos}/> 
          })
        }
      </ListGroup>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}
