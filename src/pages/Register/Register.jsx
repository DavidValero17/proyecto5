import { useState } from "react";

import Container from 'react-bootstrap/Container';

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Register= () => {
  let user = {
    nombre: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
  };

  const [valor, setValor] = useState(user);
  const { nombre, surname, phone, email, password } = valor;

  const newValue = ({ target }) => {
    const { name, value } = target;

    setValor({ ...valor, [name]: value });
  };
  return (
    <>
    <Container fluid className="CenteredForm"> 
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Name"
            value={nombre}
            onChange={newValue}
          />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formHorizontalSurname">
        <Form.Label column sm={2}>
          SurN.
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name='surname' placeholder='Surname' value={surname} onChange={newValue} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name='phone' placeholder='000000000' value={phone} onChange={newValue} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={newValue}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Pass
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={newValue}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>

    </Container>
    
    </>
    
  );
}

