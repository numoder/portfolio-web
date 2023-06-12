import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return(
        <Container>
            <Row>
                <Col>
                    <h2>404</h2>
                    <Button as={Link} to='/'>Go back</Button>
                </Col>
            </Row>
        </Container>
    )
}
