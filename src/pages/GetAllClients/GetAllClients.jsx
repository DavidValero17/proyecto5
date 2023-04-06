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
        .catch((error) => alert("Se produjo un error al cargar los clientes"));
    }
  }, [clientInfo]);

  return (
    <div className="AppointmentsCards d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="d-flex justify-content-center">
          {clientInfo.map((cliente) => (
            <Col
              key={cliente.User.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="my-3"
            >
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
          ))}
        </Row>
      </Container>
    </div>
  );
};
