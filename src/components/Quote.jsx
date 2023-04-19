import { Container,Row,Col } from "react-bootstrap";

export default function Quote () {

    return(
        <section>
        <Container className= "quote-container">
            <Row className = "text-center">
                <Col>
                <p><q>Veni, vidi, vici.</q></p> - Julius Cesare
                </Col>
            </Row>
        </Container>
        </section>
    )
    }

