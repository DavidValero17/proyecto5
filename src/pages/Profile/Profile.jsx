import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { useSelector } from "react-redux";
import { getProfile } from "../../services/apiCalls";
import { userData } from "../userSlice";

export const Profile = () => {
  const reduxCredentials = useSelector(userData);
  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    if (userProfile.name === "") {
      getProfile(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setUserProfile({
            name: respuesta.data.data.name,
            surname: respuesta.data.data.surname,
            phone: respuesta.data.data.phone,
            email: respuesta.data.data.email,
          });
        })
        .catch((error) => alert('Se produjo un error al cargar tu perfil'));
    }
  }, [userProfile]);
  return (
    <Container fluid className="CenteredForm">
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{userProfile.name}</Card.Title>
        <Card.Text>
          <li>{userProfile.surname}</li>
          <li>{userProfile.phone}</li>
          <li>{userProfile.email}</li>
        </Card.Text>
      </Card.Body>
    </Card>
   </Container> 
  );
};
