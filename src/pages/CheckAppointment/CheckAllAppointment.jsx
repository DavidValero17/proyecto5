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
        .catch((error) => alert('Se produjo un error al cargar las citas'));
    }
  }, [appointmentInfo]);

  return (
    <div className="AppointmentsCards">
      <Container>
        <Row className="d-flex justify-content-center">
          {appointmentInfo.map((cita) => (
            <Col xs={12} sm={6} md={4} lg={3} key={cita.id} className="my-3">
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
          ))}
        </Row>
      </Container>
    </div>
  );
};
