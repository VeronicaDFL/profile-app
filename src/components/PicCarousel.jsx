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
                        <p><mark >Zoey!</mark></p>
                        </Carousel.Item>
                    <Carousel.Item>
                       <img src="/images/photo2.jpg" className ='dblock w-100'alt="slide" ></img>
                       <p><mark>Bryce Canyon</mark></p>
                    </Carousel.Item>

                
                    <Carousel.Item>
                    <img src="/images/photo3.jpg" className ='dblock w-100'alt="slide" ></img>
                       <p><mark>Angels Landing</mark></p>
                    </Carousel.Item>
                    
                    
                    <Carousel.Item>
                    <img src="/images/photo4.jpg" className ='dblock w-100'alt="slide" ></img>
                        <p><mark>On the water!</mark></p>
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
        </section>
    )
    }

