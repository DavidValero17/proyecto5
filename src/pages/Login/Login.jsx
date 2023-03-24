import React from 'react'

import { useState, useEffect } from 'react';
import { logMe } from '../../services/apiCalls';

import { useDispatch, useSelector } from "react-redux";

import { login, userData } from '../userSlice';

import { useNavigate } from "react-router-dom";


import { decodeToken } from 'react-jwt';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const Login = () => {

  const navigate = useNavigate();

  //Instancio Redux en modo escritura y lectura

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

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
})};

const [welcome, setWelcome] = useState("");

useEffect(() => {
  if (credentialsRdx.credentials?.token) {
    //Si No token...home redirect
    navigate("/");
  }
}, []);

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        let decodify = decodeToken(respuesta)
        let datosBackend = {
          token: respuesta.data.token,
          usuario: decodify,
        };

        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));

        //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
        setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);

        //Redirección a Home

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };


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
          <Button type="submit" onClick={() => logeame()}>Log Me</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
    

