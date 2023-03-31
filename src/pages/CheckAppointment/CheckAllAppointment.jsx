import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getAllAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const CheckAllAppointment = () => {
  const reduxCredentials = useSelector(userData);
  const [appointmentInfo, setAppointmentInfo] = useState([]);
  useEffect(() => {
    if (appointmentInfo.length === 0) {
      getAllAppointment(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setAppointmentInfo(respuesta.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [appointmentInfo]);

  return (
    <div className="AppointmentsCards">
      {appointmentInfo.map((cita) => {
        return (
          <Container fluid key={cita.id}>
            <Row className="d-flex">
              <Col xs={12} md={12} lg={12}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{cita.date}</Card.Title>
                    <Card.Text>
                      <li>{cita.hour}</li>
                      <li>{cita.price}</li>
                      <li>{cita.about}</li>
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
