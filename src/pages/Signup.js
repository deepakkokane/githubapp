import React, { useContext, useState } from "react";
import firebase from "firebase";
import { UserContext } from "../context/UserContext";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Row,
  Form,
  Input,
  FormGroup,
  InputGroup,
  Label,
  Button,
  Container,
} from "reactstrap";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((res) => {
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((err) => {
        toast(err.message, { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if(context.user?.uid){
      return <Redirect to="/"/>
  }

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col lg={6} className="offset-lg-3">
          <Card>
            <CardHeader className="bg-info text-white">SignUp Here</CardHeader>
            <Form onSubmit={handleSubmit}>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="pass" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      id="pass"
                      name="pass"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button color="success">SignUp</Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
