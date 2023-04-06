import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const MyAppointments = () => {
  const reduxCredentials = useSelector(userData);
  const [appointmentInfo, setAppointmentInfo] = useState([]);
  useEffect(() => {
    if (appointmentInfo.length === 0) {
      getAppointment(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setAppointmentInfo(respuesta.data.data);
        })
        .catch((error) => alert('Se produjo un error al cargar tus citas'));
    }
  }, [appointmentInfo]);

  return (
    <div className="AppointmentsCards d-flex justify-content-center align-items-center vh-100">
      <Container>
        <Row className="d-flex justify-content-center mt-5">
          {appointmentInfo.map((cita) => (
            <Col xs={12} md={6} lg={4} key={cita.id} className="my-3">
              <Card style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{cita.date}</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>{cita.hour}</li>
                      <li>{cita.price}</li>
                      <li>{cita.about}</li>
                    </ul>
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
