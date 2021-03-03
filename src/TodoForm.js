import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

export default function TodoForm({setTodos, todos}) {
  const [text, setText] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      text: text,
      isDone: false
    }

    setTodos([newTodo, ...todos])
    setText("");
  }
  
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>Todo</Form.Label>
          <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
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
