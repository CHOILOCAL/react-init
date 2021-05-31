import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const reactBootstrap = () => {
    return (
        <div>
            <Button variant="success">success 버튼</Button>
            <Button variant="info">info 버튼</Button>
            <Button variant="danger">danger 버튼</Button>
            <Button variant="secondary">secondary 버튼</Button>
            <Button variant="light">light 버튼</Button>
            <Button variant="link">link 버튼</Button>

            <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>

  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

        </div>
    );
};

export default reactBootstrap;