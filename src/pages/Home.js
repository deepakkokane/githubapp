import Axios from "axios";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  FormGroup,
} from "reactstrap";
import UserCard from "../component/UserCard";
import { UserContext } from "../context/UserContext";
import Repos from "../component/Repos";
const Home = () => {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const context = useContext(UserContext);

  const fetchUser=async()=>{
      const {data}=await Axios.get(`https://api.github.com/users/${query}`)

      setUser(data);
  }

 const handleSubmit=(e)=>{
    e.preventDefault();
    fetchUser();
  }
  
  if(!context.user?.uid){
      return <Redirect to="/signin"/>
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup>
                <Input
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              <InputGroupAddon addonType="prepend">
                <Button color="warning">Fetch User</Button>
              </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
          <div className="mt-3">
              {user? <UserCard user={user}/>:null}
          </div>
        </Col>
        <Col md={7} className="offset-md-1">
            {user?<Repos repos_url={user.repos_url}/>:null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
