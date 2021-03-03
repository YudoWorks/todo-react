import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

export default function TodoForm({setTodos, todos}) {
  const [todo, setTodo] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      todo: todo,
    }

    setTodos([newTodo, ...todos])
    setTodo("");
  }
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

TodoForm.propTypes = {
  setTodos: PropTypes.func,
  todo: PropTypes.array
}