import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const ContactModal = ({ handleMsg }) => {
  const [modal, setModal] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleToggle = () => {
    setModal(!modal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/email", data, config).then((res) => {
      handleMsg(res.data);
      handleToggle();
    });
  };

  return (
    <div style={{ display: "inline-block" }}>
      <button className="contact-btn" onClick={handleToggle}>
        Contact Me
      </button>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Contact Me</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="mb-3"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="mb-3"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="message"
                className="mb-3"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <button>Submit</button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ContactModal;
