import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export function LoginForm() {

  let user = {
    email: '',
    password: ''
}

const [valor, setValor] = useState(user);
const {email, password} = valor;

const newValue = ({target}) => {
    const {name, value} = target;
        
    setValor({...valor,
        [name]:value
})}
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name='email' placeholder='email@email.com' value={email} onChange={newValue} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Pass
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name='password' placeholder='password' value={password} onChange={newValue} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;