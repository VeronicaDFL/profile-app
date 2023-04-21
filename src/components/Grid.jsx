
import { useState } from "react"
import { Container, Row, Col,Button } from "react-bootstrap"
export default function Grid () {
    const [funFact, setFunFact] = useState('')

    return(
        <section>
        <Container  className=' grid-container rounded-5'>
            <Row>
                <Col sm= {12} md={4}>
                <h2>Why Boca Code?</h2>
                <p>I’ve made the decision to enroll in the Boca Code software engineering track course because it had  in-person classes and the course description greatly inspired me. My desire to switch career to software development stemmed from a desire to broaden my knowledge and expand my creative horizons.</p>
                </Col>

                <Col sm={12} md={4}>
                <h2>Exiting Future Projects?</h2>
                <p>I have a strong desire to utilize my skills, knowledge and creativity  to drive positive change wherever I go.
                One of my present objectives is to excel not only as a software engineer but also as a well-rounded individual. I am committed to pursuing personal growth in addition to professional development, recognizing that achieving success in one area can positively impact the other.
                </p>
                </Col>
            
            <Col >
            <h2>Ideal Work Place?</h2>
            <p>ideal workplace is one where employees work together towards a shared purpose and contribute their maximum effort. The workplace has a strong culture where values are embraced, and growth is encouraged. The environment is supportive, collaborative, and empowers individuals to share their unique perspectives and ideas. This kind of workplace would be fulfilling and inspiring.
             </p>
            </Col>
           
            <Button onClick = {() => setFunFact("I still sleep with my baby-blanket😬")}>Fun Fact</Button>
            </Row>
            
            <h3 className="text-center mt-4">{funFact}</h3>
        </Container>
        </section>
    )
    }

            




