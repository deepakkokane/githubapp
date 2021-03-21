import React from "react";

import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center fixed-bottom text-white text-uppercase bg-info p-3"
    >
      Github app with firebase
    </Container>
  );
};

export default Footer;
