import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userData, userout } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const datosCredencialesRedux = useSelector(userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logout = () => {
    dispatch(userout({ credentials: {}, token: "" }));
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/home")}>
            D&J Clinic
          </Navbar.Brand>
          <Nav className="me-auto">
            {!datosCredencialesRedux.credentials?.token ? (
              <>
                <Nav.Link as={Link} to="/register">
                  Registro
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            ) : datosCredencialesRedux.credentials?.token &&
              datosCredencialesRedux.credentials?.usuario.roleId === 1 ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  Perfil
                </Nav.Link>
                <NavDropdown title="Citas" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/newappointment">
                    Crear cita
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/myappointments">
                    Consultar citas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/allappointments">
                    Ver todas las citas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/getallclients">
                    Ver todos los clientes
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/home" onClick={() => logout()}>
                  Logout
                </Nav.Link>
              </>
            ) : datosCredencialesRedux.credentials?.token ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  Perfil
                </Nav.Link>
                <NavDropdown title="Citas" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/newappointment">
                    Crear cita
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/myappointments">
                    Consultar citas
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/home" onClick={() => logout()}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <div></div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
