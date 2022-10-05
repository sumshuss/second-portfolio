import { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import image from '../assets/img/header-img.svg'


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

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2 )
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopWord(loopWord + 1);
            setDelta(500)
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">My name is Summira Hussain</span>
                        <h1> {`Welcome to my portfolio!`} <span className="wrap"> {text} </span></h1>
                        <p> I am looking for my first role in the tech industry as a Front-end developer!</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={image} alt="floating astromaut" /> */}

                    </Col>
                </Row>
            </Container>

        </section>
    )
}
