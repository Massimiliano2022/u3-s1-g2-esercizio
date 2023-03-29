import {Container} from "react-bootstrap";

const MyFooter = props => (

    <footer>
        <Container fluid>
            <p>{props.footerContent}</p>
        </Container>
    </footer>
);

export default MyFooter;