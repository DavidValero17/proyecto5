import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { DisabledInputAppointment, InputAppointment } from "../../common/AppointmentForm/AppointmentForm";
import { appointmentMe } from "../../services/apiCalls";

import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";

export const NewAppointment = () => {
  const navigate = useNavigate();

  const credentialsRdx = useSelector(userData);
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      doctorname: "Ignacio",
    },
    {
      id: 2,
      doctorname: "Mario",
    },
  ]);

  const [credenciales, setCredenciales] = useState({
    date: "",
    hour: "",
    price: "0",
    about: "",
    doctor_id: doctors.id,
    client_id: credentialsRdx.credentials.usuario.userId,
  });
  console.log(credentialsRdx.credentials.usuario.userId);
  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    e.preventDefault();
  };

  const createappointment = () => {
    appointmentMe(credenciales, credentialsRdx.credentials.token)
      .then((resultado) => {
        setCredenciales(resultado.data);
      })
      .catch((error) => console.log(error));
    //Una vez nos hemos registrado...mostramos mensaje...
    setWelcome("Cita registrada correctamente.");

    setTimeout(() => {
      navigate("/myappointments");
    }, 3000);
  };

  console.log(credenciales);
  return (
    <>
      <Container fluid className="CenteredForm2">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <Col sm={10}>
              <InputAppointment
                type="date"
                name="date"
                min="2023-03-31"
                placeholder="yyyy/mm/dd"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalSurname"
          >
            <Form.Label column sm={2}>
              Hour
            </Form.Label>
            <Col sm={10}>
              <InputAppointment
                type="time"
                name="hour"
                min="09:00"
                max="19:30"
                placeholder="00:00"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <DisabledInputAppointment
                type="text"
                name="price"
                placeholder="0"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              About
            </Form.Label>
            <Col sm={10}>
              <InputAppointment
                type="text"
                name="about"
                placeholder="Tell us something"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </Col>
          </Form.Group>

          <Form.Select
            name={"doctor_id"}
            onChange={(e) => inputHandler(e)}
            aria-label="Default select example"
          >
            <option>Choose your Doctor:</option>
            {doctors.map((doctor) => {
              return (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.doctorname}
                </option>
              );
            })}
          </Form.Select>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={() => createappointment()}>
                Create a New Appointment
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
