import { Component } from "react";
import { Container, Row, Col, Card, Button, } from "react-bootstrap";

import fantasy from '../books/fantasy.json';

class AllTheBooks extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    {fantasy.map((book) => (
                        <Col md={4}>
                            <Card style={{ width: '18rem',}}>
                                <Card.Img className="img-fluid object-fit-cover w-100" variant="top" src={book.img} style={{ height: '200px'}}/>
                                <Card.Body>
                                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                                    <Card.Text>
                                        {book.category}
                                    </Card.Text>
                                    <Card.Text>
                                        {book.price}€
                                    </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default AllTheBooks;