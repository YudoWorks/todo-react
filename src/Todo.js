import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Trash, Pencil } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoEditModal from './TodoEditModal';

function Todo({
  text, id, isDone, setTodos,
}) {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  function onEdit() {
    handleShow();
  }

  function onDelete() {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function onUpdateDoneStatus() {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isDone: !isDone };

        return todo;
      });
    });
  }
  return (
    <div>
      <ListGroup.Item style={{
        color: 'black', width: '500px', display: 'flex', justifyContent: 'space-between',
      }}
      >
        <Form.Group controlId="todoStatus">
          <Form.Check
            type="checkbox"
            checked={isDone}
            label={text}
            style={isDone ? { display: 'flex', alignItems: 'center', textDecoration: 'line-through' } : { display: 'flex', alignItems: 'center' }}
            onChange={onUpdateDoneStatus}
          />
        </Form.Group>
        <div>
          <Button variant="danger" onClick={onDelete}>
            <Trash />
          </Button>
          <Button variant="warning" onClick={onEdit}>
            <Pencil />
          </Button>
        </div>
      </ListGroup.Item>
      <TodoEditModal
        handleClose={handleClose}
        show={show}
        setTodos={setTodos}
        id={id}
        InitalText={text}
      />
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
