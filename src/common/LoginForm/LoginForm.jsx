// // import { useState, useEffect } from 'react';
// // import { logMe } from '../../services/apiCalls';

// // import { useDispatch, useSelector } from "react-redux";

// // import { login, userData } from '../../pages/userSlice';

// // import { useNavigate } from "react-router-dom";


// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// // import { decodeToken } from 'react-jwt';


// export const LoginForm = () => {
    
//   return (
//     <Form>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
//         <Form.Label column sm={2}>
//           Email
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="text" name='email' placeholder='email@email.com' value={email} onChange={newValue} />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
//         <Form.Label column sm={2}>
//           Pass
//         </Form.Label>
//         <Col sm={10}>
//           <Form.Control type="text" name='password' placeholder='password' value={password} onChange={newValue} />
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Form.Check label="Remember me" />
//         </Col>
//       </Form.Group>

//       <Form.Group as={Row} className="mb-3">
//         <Col sm={{ span: 10, offset: 2 }}>
//           <Button type="submit" onClick={() => logeame()}>Log Me</Button>
//         </Col>
//       </Form.Group>
//     </Form>
//   );
// }

// export default LoginForm;