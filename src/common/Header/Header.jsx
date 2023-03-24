import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const datosCredencialesRedux = useSelector(userData);

  const navigate = useNavigate();

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
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            ) : datosCredencialesRedux.credentials?.token ? (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            ) : (
              <div></div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
