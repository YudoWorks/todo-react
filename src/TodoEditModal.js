import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function TodoEditModal({handleClose, show, setTodos, id, InitalText}) {
  const [text, setText] = useState(InitalText);

  function handleOnSubmit(e) {
    e.preventDefault();

    setTodos(prevTodos =>   
      prevTodos.map(todo => {
        if(todo.id === id) return {...todo, text}
        
        return todo
      })
    )
    setText("");
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleOnSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Todo</Form.Label>
              <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="reset" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

TodoEditModal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  setTodos: PropTypes.func,
  id: PropTypes.number,
  InitalText: PropTypes.string
}

export default TodoEditModal
