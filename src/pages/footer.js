import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>footer</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
    // <div>
    //     <br />
    //     <h3>Footer</h3>
    // </div>
  );
};

export default Footer;
