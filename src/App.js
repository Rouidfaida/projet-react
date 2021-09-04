import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
<div className="App" >
          <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

     
<Form  style={{
            display: "block",
            width: 700, height: 500,backgroundColor : 'aqua',
            marginLeft: '500px',
            marginTop: '50px',
            borderRadius: 5,


          }} >

  <Row className="mb-3"  >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label style={{marginTop:'20px', marginLeft: '20px',color:'red', fontWeight: 'bold', fontSize:20 }}  >Email</Form.Label>
      <Form.Control style={{ width : 400 ,marginLeft: '20px',}}  type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword" >
      <Form.Label style={{marginTop:'20px', color:'red', fontWeight: 'bold', fontSize:20 }}>Password</Form.Label>
      <Form.Control style={{width : 230 }}  type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label style={{marginLeft: '20px',color:'red', fontWeight: 'bold', fontSize:20 }}>Address</Form.Label>
    <Form.Control style={{ marginLeft: '20px', width :650}}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label style={{marginLeft: '20px',color:'red', fontWeight: 'bold', fontSize:20 }}>Telephone</Form.Label>
    <Form.Control style={{ marginLeft: '20px', width :650}} />
  </Form.Group>

  

  

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label style={{marginLeft: '20px',color:'red', fontWeight: 'bold', fontSize:20 }}>City</Form.Label>
      <Form.Control style={ {marginLeft: '20px'}} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label style={{color:'red', fontWeight: 'bold', fontSize:20 }}>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>Femme</option>
        <option>homme</option>

      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label style={{ marginLeft:'-20px', color:'red', fontWeight: 'bold', fontSize:20 }}>Zip</Form.Label>
      <Form.Control style={{ marginLeft:'-20px' }} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check style={{ marginLeft:'20px' }} type="checkbox" label="Check me out" />
  </Form.Group>

  <Button  style={{ marginLeft:'20px' }}  variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </header>
        </div>    </div>
  );
}

export default App;
