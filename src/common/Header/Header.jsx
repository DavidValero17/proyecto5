import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const Header = () => {

const navigate = useNavigate();

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container fluid>
            <Navbar.Brand onClick={() => navigate("/home")}>D&J Clinic</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}