import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
import { Trash } from 'react-bootstrap-icons'
import { Pencil } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TodoEditModal from './TodoEditModal'

function Todo({text, id, todos, setTodos}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onEdit() {
    handleShow();
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
          <Button variant='warning' onClick={onEdit}>
            <Pencil />
          </Button>
        </div>
      </ListGroup.Item>
      <TodoEditModal handleClose={handleClose} show={show} todos={todos} setTodos={setTodos} id={id}/>
    </div>
  )
}

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  todos: PropTypes.array,
  setTodos: PropTypes.func
}

export default Todo
