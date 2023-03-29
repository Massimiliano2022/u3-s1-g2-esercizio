import { Container } from "react-bootstrap";

const Welcome = props => (

    <Container fluid>
        <div>
            <h1>{props.heading}</h1>
            <p>{props.subTitle}</p>
        </div>
    </Container>
);
export default Welcome;