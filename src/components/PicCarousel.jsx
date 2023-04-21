import { Col, Container, Row,Carousel, CarouselItem } from "react-bootstrap";

export default function PicCarousel() {

    return(
        <section>
        <Container className="carousel-container ">
            <Row>
                <Col className= "p=0">
                    <Carousel>
                        <Carousel.Item>
                        <img src= "/images/photo1.jpg" 
                        className= "dblock w-100"
                        alt="fade"></img>
                        <h2>Zoey!</h2>
                        </Carousel.Item>
                    <Carousel.Item>
                       <img src="/images/photo2.jpg" className ='dblock w-100'alt="slide" ></img>
                       <h2>Bryce Canyon</h2>
                    </Carousel.Item>

                
                    <Carousel.Item>
                    <img src="/images/photo3.jpg" className ='dblock w-100'alt="slide" ></img>
                        <h2>Angels Landing</h2>
                    </Carousel.Item>
                    
                    
                    <Carousel.Item>
                    <img src="/images/photo4.jpg" className ='dblock w-100'alt="slide" ></img>
                        <h2>Steven and I</h2>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
        </section>
    )
    }

