import { Container, Row, Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

export default function Footer() {
const currentYear = new Date().getFullYear();
const gitHubLink = "https://github.com/veronicadfl/profile-app";
const Linkedinlink ="https://www.linkedin.com/in/veronicadefelice/"



    return(
        <footer>
            <Container>
                <Row>
                 <Col><p>&copy; {currentYear} Veronica De Felice
                 <br />
                 <Github/>
                 <a href={gitHubLink} 
                 target="_blank"
                 rel="noreferrel" >GitHub</a>
                 
                 
                 <Linkedin/>
                 <a href={Linkedinlink} 
                 target="_blank"
                 rel="noreferrel">Linkedln</a>
                 </p>

                 </Col>
                 </Row>
            </Container>
        </footer>
    )
    }