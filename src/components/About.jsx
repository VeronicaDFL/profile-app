import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";




export default function About() {
    const [imgUrl, setImgUrl] = useState ('/images/v.jpg')
    

    return(
        <main>
       <Container className>
        <Row className= "text-center about-container  rounded-5">
            <Col sm={12} md={6}>
                <img src = {imgUrl} className= "rounded-5 d-block" alt = "Profile"/>
                <Button onClick = {() => setImgUrl('/images/v2.jpg')} size= "sm">What's in my Head...</Button>
                <Button onClick = {() => setImgUrl('/images/v.jpg')} size="sm">Back To Normal</Button>
            </Col>
            
            <Col>
                <h1 className="mt-3">Veronica De Felice</h1>
                <p>I am an Italian-born who migrated to the United States  about  10 years ago and transitioned from apparel design to boat soft goods design. I’ve recently decided to pursue a career in software development and I am currently  enrolled in a software engineering program.I enjoy sports such as skiing, pickleball volleyball  and any kind of outdoors activity. </p>
            </Col>
        </Row>
       </Container>
        </main>
    )
    }

            

