import { Col, Container, Row } from "react-bootstrap";

export default function Video() {

    return(
        <section>
        <Container className= " video-container">
            <Row>
                <Col>
                <video>Video</video>
                <p>I love Dogs better than Humans</p>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/rgOylRHp1gM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
        </section>
    )
    }

                
