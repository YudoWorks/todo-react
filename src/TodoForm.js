import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default function TodoForm({ setTodos }) {
  const [text, setText] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();

    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        text,
        isDone: false,
      }, ...prevTodos,
    ]);
    setText('');
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
  );
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
