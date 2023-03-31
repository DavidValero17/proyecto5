import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getAllClients } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const GetAllClients = () => {
  const reduxCredentials = useSelector(userData);
  const [clientInfo, setAppointmentInfo] = useState([]);
  useEffect(() => {
    if (clientInfo.length === 0) {
      getAllClients(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setAppointmentInfo(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [clientInfo]);
console.log(clientInfo)
  return (
    <div className="AppointmentsCards">
      {clientInfo.map((cliente) => {
        return (
          <Container fluid key={cliente.User.id}>
            <Row className="d-flex">
              <Col xs={12} md={12} lg={12}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{cliente.User.name}</Card.Title>
                    <Card.Text>
                      <li>{cliente.User.surname}</li>
                      <li>{cliente.User.phone}</li>
                      <li>{cliente.User.email}</li>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};
