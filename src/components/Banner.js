import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';



export const Banner = () => {

    const [loopWord, setLoopWord] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toFlip = ["I am a Junior Front-end Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 5000;

    useEffect(()=> {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopWord % toFlip.length
        let fullText = toFlip[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

    
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">My name is Summira Hussain</span>
                        <h1> {`Welcome to my portfolio!`} <span className="wrap"> {text} </span></h1>
                        <p> A passionate and versatile Front-end developer looking to make a difference in the tech industry!</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>


                    </Col>
                </Row>
            </Container>

        </section>
    )
}
