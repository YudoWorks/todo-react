import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import PropTypes from 'prop-types'

export default function TodoList({todos}) {
  return (
    <div style={{margin: "1em"}}>
      <ListGroup>
        {
          todos.map(todo => {
            return <ListGroup.Item style={{color: "black", width: "500px", textAlign: "justify"}}>{todo.todo}</ListGroup.Item>
          })
        }
      </ListGroup>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array
}
