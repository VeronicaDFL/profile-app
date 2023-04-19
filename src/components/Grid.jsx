
import { Container, Row, Col } from "react-bootstrap"
export default function Grid () {

    return(
        <section>
        <Container  className=' grid-container'>
            <Row>
                <Col sm= {12} md={4}>
                <h2>Why Boca Code?</h2>
                <p>I’ve made the decision to enroll in the Boca Code software engineering track course because it had  in-person classes and the course description greatly inspired me. My desire to switch career to software development stemmed from a desire to broaden my knowledge and expand</p>
                </Col>

                <Col sm={12} md={4}>
                <h2>Exiting Project?</h2>
                <p>I have a strong desire to utilize my skills, knowledge and creativity  to drive positive change wherever I go.
                   One of my present objectives is to excel not only as a software engineer but also as a well-rounded individual. I am committed to pursuing personal growth in addition to professional development, recognizing that achieving success in </p>
                </Col>
            
            <Col >
            <h2>Ideal Work Place?</h2>
            <p>My ideal workplace would be one characterized by a shared sense of purpose, where a group of individuals come together to contribute their maximum effort towards achieving a common goal. Such a workplace would have a strong sense of culture, where the values and beliefs of the organization are embraced and celebrated by all members. It would also be characterized by continuous growth, where employees are encouraged to learn, develop, and improve both professionally and personally. The environment would be supportive and collaborative, where individuals feel valued and empowered to contribute their unique perspectives and ideas. Overall, a workplace that embodies these qualities would provide a fulfilling and inspiring atmosphere in which to work and grow.
             </p>
            </Col>
            </Row>
        </Container>
        </section>
    )
    }




