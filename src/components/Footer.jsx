import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
const currentYear = new Date().getFullYear();
const gitHubUrl = "https://github.com/veronicadfl/profile-app";
    return(
        <footer>
            <Container>
                <Row>
                 <Col><p>&copy; {currentYear} Veronica De Felice
                 <br />
                 <a href={gitHubUrl} 
                 target="_blank"
                 rel="noreferrel">Code in GitHub</a></p>
                 </Col>
                 </Row>
            </Container>
        </footer>
    )
    }