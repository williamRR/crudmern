import React from 'react';
import Home from './containers/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Row>
        <Col className="m-5">
          <Home />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
