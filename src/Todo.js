import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import { Trash } from 'react-bootstrap-icons'
import { Pencil } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Todo({text, id, todos, setTodos}) {
  function onEdit(params) {
  
  }
  
  function onDelete() {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  }
  return (
    <div>
      <ListGroup.Item style={{color: "black", width: "500px", display: "flex", justifyContent: "space-between"}}>
          <Form.Group controlId="todoStatus">
            <Form.Check type="checkbox" label={text} style={{display:"flex", alignItems:'center'}}/>
          </Form.Group>
        <div>
          <Button variant='danger' onClick={onDelete}>
            <Trash />
          </Button> 
          <Button variant='warning'>
            <Pencil />
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  todos: PropTypes.array,
  setTodos: PropTypes.func
}

export default Todo
