import { Col, Container, Row } from "react-bootstrap";

export default function About() {

    return(
        <main>
       <Container className>
        <Row className= "text-center">
            <Col sm={12} md={6}>
            <img src = "https://picsum.photos/200/300" className= "rounded-circle" alt = "Profile"/>
            </Col>
            <Col>
            <h1 className="mt-3">Veronica De Felice</h1>
            <p>I am an Italian-born who migrated to the United States  about 10 years ago and transitioned from apparel design to boat soft goods design. I’ve recently decided to pursue a career in software development and I am currently  enrolled in a  software engineering program,.I enjoy sports such as skiing, pickleball volleyball  and any kind of outdoors activity. Two random  Fun facts about me are that I have a strong aversion to cilantro and I still sleep with a Baby-blanket which I r</p>
            </Col>
        </Row>
       </Container>
        </main>
    )
    }

            

