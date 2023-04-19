import { Col, Container, Row,Carousel } from "react-bootstrap";

export default function PicCarousel() {

    return(
        <section>
        <Container className="carousel-container">
            <Row>
                <Col className= "p=0">
                    <Carousel fade>

                        <img src= "https://picsum.photos/200/300"
                        className= "dblock w-100"
                        alt="slide"></img>
                    <Carousel.Item>

                        <h2>First Item</h2>
                        <p>First item are great and i musty learn to wroite english</p>
                    </Carousel.Item>
                
                    <Carousel.Item>
                        <h2>Second Item</h2>
                        <p>First item are great and i musty learn to wroite english</p>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <h2>Second Item</h2>
                        <p>First item are great and i musty learn to wroite english</p>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
        </section>
    )
    }

