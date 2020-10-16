import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const Formulario = ({
  completedTask,
  setCompletedTask,
  handleSubmit,
  isModalOPen,
  closeModal,
  openModal
}) => {

  return (
    <Container>
      <Modal show={isModalOPen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={completedTask.firstName}
                onChange={(e) => setCompletedTask(
                  {
                    ...completedTask,
                    firstName: e.currentTarget.value,
                  }
                )} />
            </Form.Group>

            <Form.Group controlId="secondName">
              <Form.Label>Second Name</Form.Label>
              <Form.Control
                type="text"
                value={completedTask.secondName}
                onChange={(e) => setCompletedTask(
                  {
                    ...completedTask,
                    secondName: e.currentTarget.value,
                  }
                )} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={
              completedTask.firstName === "" ||
              completedTask.secondName === ""
            }
            onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col className="text-center mb-2">
          <Button className="btn btn-sm btn-info" onClick={openModal}>
            Agregar
          </Button>
        </Col>
      </Row>
    </Container>

  )
}

export default Formulario