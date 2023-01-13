import Form from "react-bootstrap/Form";
import "./Contact.css";
import Container from "react-bootstrap/Container";
function Contact() {
  return (
    <Container className='"align-middle' id="contact">
      <Form className="parentForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
